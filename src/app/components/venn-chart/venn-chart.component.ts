import { Component, Input, OnInit, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { Portfolio } from "../../types";
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5venn from '@amcharts/amcharts5/venn';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-venn-chart',
  templateUrl: './venn-chart.component.html',
  styleUrls: ['./venn-chart.component.css']
})
export class VennChartComponent implements OnInit {
  @Input() portfolio1!: Portfolio;
  @Input() portfolio2!: Portfolio;
  overlap: number = 0;
  commonHoldings: number = 0;

  private root!: am5.Root;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) { }

  ngOnInit() {
    console.log(this.portfolio1);
    console.log(this.portfolio2);

    // Crie o Root apenas uma vez durante a inicialização do componente
    this.root = am5.Root.new("chartdiv");
    this.root.setThemes([am5themes_Animated.new(this.root)]);
  }

  ngOnChanges() {
    // Este método será chamado sempre que os inputs mudarem
    this.updateChart();
  }

  updateChart() {
    // Limpe o gráfico existente se já houver um
    if (this.root.container.children.length > 0) {
      this.root.container.children.clear();
    }

    this.overlap = this.calcularSobreposicao(this.portfolio1, this.portfolio2);
    this.commonHoldings = this.calcularAtivosEmComum(this.portfolio1, this.portfolio2);

    const chart = this.root.container.children.push(
      am5venn.Venn.new(this.root, {
        categoryField: "name",
        valueField: "value",
        intersectionsField: "sets"
      })
    );

    const dataSets = [
      { name: 'ETF 1', value: 1 },
      { name: 'ETF 2', value: 1 },
      { name: `${Math.round(this.overlap * 10000) / 100}%`, sets: ['ETF 1', 'ETF 2'], value: this.overlap },
    ];

    // Atualize o gráfico com os dados
    chart.data.setAll(dataSets);
  }


  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      this.updateChart();
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  }

  calcularSobreposicao(portfolio1: Portfolio, portfolio2: Portfolio): number {
    const tickersSet = new Set([...portfolio1.holdings.map(holding => holding.ticker), ...portfolio2.holdings.map(holding => holding.ticker)]);

    let somaPonderada = 0;

    for (const ticker of tickersSet) {
      const holding1 = portfolio1.holdings.find(holding => holding.ticker === ticker);
      const holding2 = portfolio2.holdings.find(holding => holding.ticker === ticker);

      if (holding1 && holding2) {
        const peso1 = holding1.share / portfolio1.holdings.reduce((sum, h) => sum + h.share, 0);
        const peso2 = holding2.share / portfolio2.holdings.reduce((sum, h) => sum + h.share, 0);

        somaPonderada += Math.min(peso1, peso2);
      }
    }

    return somaPonderada;
  }

  calcularAtivosEmComum(portfolio1: Portfolio, portfolio2: Portfolio){
    const holdings1 = portfolio1.holdings.map(p => p.ticker);
    const holdings2 = portfolio2.holdings.map(p => p.ticker);

    const commonHoldings = holdings1.filter(h => holdings2.includes(h));

    return commonHoldings.length;
  }

  protected readonly Math = Math;
}
