import { Component } from '@angular/core';
import { donateUrl } from "../../config";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  url = donateUrl;
}
