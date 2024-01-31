import { Component } from '@angular/core';
import { donateUrl } from "../../config";
import {MatDialog} from "@angular/material/dialog";
import {ShareSocialMediaDialogComponent} from "../share-social-media-dialog/share-social-media-dialog.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) {
  }

  donate() {
    window.open(donateUrl, '_blank')
  }

  shareData = {
    url: window.location.href,
    title: document.title,
  }

  async openDialog() {
    try {
      await navigator.share(this.shareData);
    } catch (e: any) {
      if (e.name !== 'AbortError') {
        this.dialog.open(ShareSocialMediaDialogComponent);
      }
    }
  }
}
