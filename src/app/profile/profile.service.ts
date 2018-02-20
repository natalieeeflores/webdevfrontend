import { Injectable } from '@angular/core';

import { UpdateProfilePicComponent } from './update-profile-pic/update-profile-pic.component'

@Injectable()
export class ProfileService {

  constructor() { }

  readFile(file, callback, user, dialog, http) {
    let fileBrowser = file.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      var reader: any, newImg
      reader = new FileReader();
      let formData = new FormData()
      formData.append('image', fileBrowser.files[0])
      reader.onload = function (e) {
        newImg = e.target.result
        callback(newImg, user, dialog, http, formData)
      };
      reader.readAsDataURL(fileBrowser.files[0]);
    }
  }

  generateProfileDialog(src, user, dialog, http, formData) {
    let dialogRef = dialog.open(UpdateProfilePicComponent, {
      width: '400px',
      height: '420px',
      data: { image: src }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== "undefined") {
        user["avatar"] = result
        http.put('https://webdevbackend.herokuapp.com/avatars',
        formData , { withCredentials: true }).subscribe()
      }
    });
  }
}
