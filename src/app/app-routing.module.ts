import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SobreposicaoComponent} from "./components/sobreposicao/sobreposicao.component";

const routes: Routes = [
  {
    path: '',
    component: SobreposicaoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
