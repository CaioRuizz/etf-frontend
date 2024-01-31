import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import {Portfolio} from "../../types";

@Component({
  selector: 'app-all-shares-dialog',
  templateUrl: './all-shares-dialog.component.html',
  styleUrl: './all-shares-dialog.component.css'
})
export class AllSharesDialogComponent {

  displayedColumns = ['Ticker', 'Share']

  constructor(
    public dialogRef: MatDialogRef<AllSharesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Portfolio,
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
