import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'application-prefix-dialog',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./dialog.component.scss'],
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close(this.data.model);
  }

  onConfirm(): void {
    this.dialogRef.close({ action: true, data: this.data.model });
  }

  onChange() {
    if (typeof this.data.onChange !== 'undefined') {
      this.data.onChange(this.data.model);
    }
  }
}
