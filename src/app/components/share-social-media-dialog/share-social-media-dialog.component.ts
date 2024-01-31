import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-share-social-media-dialog',
  templateUrl: './share-social-media-dialog.component.html',
  styleUrl: './share-social-media-dialog.component.css'
})
export class ShareSocialMediaDialogComponent {
  constructor(private dialogRef: MatDialogRef<ShareSocialMediaDialogComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  protected readonly window = window;
  protected readonly navigator = navigator;
}

