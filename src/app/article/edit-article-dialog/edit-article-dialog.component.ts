import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-edit-article-dialog',
  templateUrl: './edit-article-dialog.component.html',
  styleUrls: ['./edit-article-dialog.component.css'],
  providers: [ MatDialog ]
})
export class EditArticleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditArticleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
