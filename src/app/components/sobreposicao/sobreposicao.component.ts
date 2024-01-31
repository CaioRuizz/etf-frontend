import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../config";

type Ticker = {
  ticker: string,
  type: string,
}

@Component({
  selector: 'app-sobreposicao',
  templateUrl: './sobreposicao.component.html',
  styleUrl: './sobreposicao.component.css'
})
export class SobreposicaoComponent {

  constructor(private httpClient: HttpClient) {
  }

  etf1: string = '';
  etf2: string = '';

  options: string[] = [];
  optionsMap: any = {};

  ngOnInit() {
    this.httpClient.get<Ticker[]>(`${apiUrl}/api/v1/etf/tickers`).subscribe(r => {
      console.log(r);
      r.forEach(ticker => {
        this.optionsMap[ticker.ticker] = ticker.type === 'Stock' ? 'Renda Variável' : 'Renda Fixa';
      });
      this.options = r.map(x => x.ticker);
    });
  }

  calcular() {

  }

}
