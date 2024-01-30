import { Component } from '@angular/core';
import { donateUrl } from "../../config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  donate() {
    window.open(donateUrl, '_blank')
  }
}
