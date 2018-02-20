import { Injectable } from '@angular/core';

import { EditArticleDialogComponent } from './edit-article-dialog/edit-article-dialog.component'

@Injectable()
export class ArticlesService {

  constructor() { }

  dateFilter(a, b) {
    //sorts so new posts are first
    var a_date = new Date(a["date"])
    var b_date = new Date(b["date"])
    return b_date.getTime() - a_date.getTime()
  }

  search(post) {
    var query = $('#searchbar').val()
    if ((post["poster"].includes(query) || post["text"].includes(query)) == false) {
      $('#'+post["id"]).hide()
    } else {
      $('#'+post["id"]).show()
    }
  }

  editPost(id, posts, dialog, http) {
    var post = posts.filter(function(post) {
      return post["id"] == id
    })
    let dialogRef = dialog.open(EditArticleDialogComponent, {
      width: '400px',
      height: '400px',
      data: { name: post["0"]["poster"], text: post["0"]["text"],
      image: post["0"]["image"] }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (typeof result !== "undefined") {
        post["0"]["text"] = result
        console.log(id)
        let link = "https://webdevbackend.herokuapp.com/articles/" + id.toString()
        console.log(link)
        http.put(link, { "text": result }, { withCredentials: true }).subscribe()
      }
    });
  }

  editComment(pid, cid, posts, dialog, http) {
    var target_comment
    posts.filter(function(post) {
      if (post["id"] == pid) {
        post["comments"].filter(function(comment) {
          if (comment["commentId"] == cid) {
            target_comment = comment
          }
        })
      }
    })

    let dialogRef = dialog.open(EditArticleDialogComponent, {
      width: '400px',
      height: '400px',
      data: { name: target_comment["author"], text: target_comment["text"],
      image: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result !== "undefined") {
        target_comment["text"] = result
        let link = "https://webdevbackend.herokuapp.com/articles/" + pid.toString()
        http.put(link, { "text": result, "commentId": cid },
        { withCredentials: true }).subscribe()
      }
    });
  }
}
