import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile-pic',
  templateUrl: './update-profile-pic.component.html',
  styleUrls: ['./update-profile-pic.component.css'],
  providers: [ MatDialog ]
})
export class UpdateProfilePicComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateProfilePicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
