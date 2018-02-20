import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from './article'
import { ImagePreviewComponent } from './image-preview/image-preview.component'

@Injectable()
export class NewArticleService {

  constructor(private http: HttpClient) { }

  setDate(article): void {
    var date = new Date(Date.now())
    article.date = date
  }

  helperImagePost(file, callback, dialog, model, service, posts, user, http) {
    let fileBrowser = file.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      var reader: any, newImg
      reader = new FileReader();
      let formData = new FormData()
      formData.append('image', fileBrowser.files[0])
      reader.onload = function (e) {
        newImg = e.target.result
        callback(newImg, dialog, model, service, posts, user, http, formData)
      };
      reader.readAsDataURL(fileBrowser.files[0]);
    }
  }

  generateImageDialog(src, dialog, model, service, posts, user, http, formData) {
    let dialogRef = dialog.open(ImagePreviewComponent, {
      width: '400px',
      height: '420px',
      data: { image: src, text: '', post: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== "undefined") {
        service.setDate(model)
        posts.unshift({"date": model.date,
        "text": result, "poster": user["name"],
        "image": src})
        formData.append('text', result)
        http.post('https://webdevbackend.herokuapp.com/article',
        formData , { withCredentials: true }).subscribe()
      }
    });
  }
}
