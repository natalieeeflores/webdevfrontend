import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

import { ArticlesService } from '../article/articles.service'
import { NewFollowerService } from './new-follower.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [HttpClient, ArticlesService, NewFollowerService]
})
export class MainComponent implements OnInit {
  followers: Object[]
  followers_info: Object[]
  posts: Object[]
  allPosts: Object[]
  users: Object[]
  user: Object
  tempStatus: String
  tempUser: String //stores new follower's name
  constructor(private http: HttpClient,
    private articleServ: ArticlesService,
    private newFollowerServ: NewFollowerService) { }

    ngOnInit() {

      this.http.get('https://webdevbackend.herokuapp.com/users').subscribe(data => {
        this.users = data['profiles']
        this.http.get('https://webdevbackend.herokuapp.com/following',
        { withCredentials: true }).subscribe(data => {
          this.followers = data['following']
          this.followers_info = this.users.filter(user => {
            let contains = this.followers.indexOf(user['username'])
            return contains != -1
          })
          this.followers_info.forEach(follower => {
            let index = this.followers.indexOf(follower['username'])
            console.log("index ", index)
            console.log(follower)
            follower['index'] = index
          })

          this.http.get('https://webdevbackend.herokuapp.com/profile',
          { withCredentials: true }).subscribe(data => {
            this.user = data['profile']
            this.http.get('https://webdevbackend.herokuapp.com/articles').subscribe(data => {
                console.log(data['articles'])

                this.http.get('https://webdevbackend.herokuapp.com/profile',
                { withCredentials: true }).subscribe(data => {
                  this.user = data['profile']
                })
                this.allPosts = data['articles']
                this.posts = data['articles']
                this.posts = this.newFollowerServ.updateFollowers(this.followers,
                  this.posts, this.allPosts, this.user)
                this.posts.sort(this.articleServ.dateFilter).slice(10)
            })
          })
        })
      })

      this.tempStatus = ''
      this.tempUser = ''
    }

    updateStatus() {
      this.user["headline"] = this.tempStatus
      this.http.put('https://webdevbackend.herokuapp.com/headline',
      { 'headline': this.tempStatus }, { withCredentials: true }).subscribe()
      this.tempStatus = ''
    }

    unfollow(index) {
      const link = 'https://webdevbackend.herokuapp.com/following/' + this.followers[index]
      this.http.delete(link, { withCredentials: true }).subscribe()
      const follower =  this.followers_info[index]
      const follower_index = this.followers.indexOf(follower['username'])
      this.followers.splice(follower_index, 1)
      this.followers_info.splice(index, 1)
      this.posts = this.newFollowerServ.updateFollowers(this.followers,
        this.posts, this.allPosts, this.user)
    }

    follow() {
      let userValue = this.tempUser
      let new_following = this.users.filter(user =>
        { return user['username'] == userValue })
      if (new_following.length == 0) {
        $('#validUser').show()
      } else {
        $('#validUser').hide()
        let link = "https://webdevbackend.herokuapp.com/following/" + new_following[0]['username']
        this.http.put(link, {'empty': 'request'},
        { withCredentials: true }).subscribe()
        console.log(this.followers)
        this.followers_info.push(new_following[0])
        this.followers.push(this.tempUser)
        console.log(this.followers)
        this.posts = this.newFollowerServ.updateFollowers(this.followers,
           this.posts, this.allPosts, this.user)
        this.tempUser = ''
      }
    }

    logout() {
      this.http.put("https://webdevbackend.herokuapp.com/logout",
      { "empty": "request" }, { withCredentials: true }).subscribe()
    }
  }
