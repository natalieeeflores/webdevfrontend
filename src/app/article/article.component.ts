import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


import { Article } from './article'
import { NewArticleService } from './new-article.service'
import { ArticlesService } from './articles.service'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ HttpClient, NewArticleService,
    ArticlesService, MatDialog]
  })
export class ArticleComponent implements OnInit {
  @Input("posts") posts: Object[]
  @Input("allPosts") allPosts: Object[]
  @ViewChild('fileInput') fileInput;
  @ViewChild('imagePost') imagePost;
  @ViewChild('imageText') imageText;
  @ViewChild('commentInput') commentInput;
  text;
  image;
  searchQuery = ''
  model = new Article('', '', '', '')
  @Input("user") user: Object
  constructor(private http: HttpClient,
    private newarticleServ: NewArticleService,
    private articleServ: ArticlesService,
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  editPost(id): void {
    this.articleServ.editPost(id, this.posts, this.dialog, this.http)
  }

  editComment(pid, cid) {
    this.articleServ.editComment(pid, cid, this.posts, this.dialog, this.http)
  }

  newTextPost() {
    this.newarticleServ.setDate(this.model)
    this.posts.unshift({"id": this.allPosts.length, "date": this.model.date,
    "text": this.model.post, "poster": this.user["name"]})
    $('#post').val('')
    let formData = new FormData()
    formData.append('text', this.model.post)
    this.http.post('https://webdevbackend.herokuapp.com/article',
    formData, { withCredentials: true }).subscribe()
  }

  search() {
    this.posts.filter(this.articleServ.search)
  }

  newImagePost() {
    if ($('#fileInput').val() != "") {
      this.newarticleServ.helperImagePost(this.fileInput,
        this.newarticleServ.generateImageDialog, this.dialog, this.model,
        this.newarticleServ, this.posts, this.user, this.http)
    }
    $("#fileInput").val("")

  }

  addComment(id) {
    var comment_val = this.commentInput.nativeElement.value
    var comment = { "commenter": this.user["name"],
    "comment": comment_val }
    this.posts.filter(function(post) {
      if (post["id"] == id) {
        comment["cid"] = post["comments"].length
        post["comments"].unshift(comment)
      }
      $("#commentInput").val('')
    })
    let link = 'https://webdevbackend.herokuapp.com/articles/' + id.toString()
    this.http.put(link, { "text": comment_val, "commentId": -1 },
    { withCredentials: true }).subscribe()
  }
}
