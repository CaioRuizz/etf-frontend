import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../../config";
import {Portfolio, Ticker} from "../../types";
import {MatDialog} from "@angular/material/dialog";
import {AllSharesDialogComponent} from "../all-shares-dialog/all-shares-dialog.component";

@Component({
  selector: 'app-sobreposicao',
  templateUrl: './sobreposicao.component.html',
  styleUrl: './sobreposicao.component.css'
})
export class SobreposicaoComponent {

  constructor(private httpClient: HttpClient, private dialog: MatDialog) {
  }

  displayedColumns = ['Ticker', 'Share']

  portfolio1?: Portfolio;
  portfolio2?: Portfolio;

  overlap: Number = 0;

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

  getTopShares(holdings: any[]): any[] {
    // Implement logic to return the top 10 shares based on your criteria
    // For example, you can sort the holdings array by share value and return the top 10
    return holdings.slice(0, 5);
  }

  openDialog(portfolio: Portfolio) {
    const dialogRef = this.dialog.open(AllSharesDialogComponent, {
      data: portfolio,
    });
  }

  async buttonCalcularClick() {
    if (this.options.includes(this.etf1) && this.options.includes(this.etf2)) {

      this.portfolio1 = await new Promise(resolve => {
        this.httpClient.get<Portfolio>(`${apiUrl}/api/v1/etf/${this.etf1}`).subscribe(r => {
          resolve(r);
        });
      });

      this.portfolio2 = await new Promise(resolve => {
        this.httpClient.get<Portfolio>(`${apiUrl}/api/v1/etf/${this.etf2}`).subscribe(r => {
          resolve(r);
        });
      });
    }
  }
}
