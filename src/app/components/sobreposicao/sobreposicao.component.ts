import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sobreposicao',
  templateUrl: './sobreposicao.component.html',
  styleUrl: './sobreposicao.component.css'
})
export class SobreposicaoComponent {

  constructor(private httpClient: HttpClient) {
  }


  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;


  ngOnInit() {
    this.httpClient.get<string[]>("https://sgk6cc5a25.execute-api.sa-east-1.amazonaws.com/Prod/api/v1/etf/tickers").subscribe(r => {
      console.log(r);
      this.options = r;
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
