import { Injectable } from '@angular/core';

@Injectable()
export class NewFollowerService {

  constructor() { }

  postFilter(follower, followers) {
    return follower["poster"] in followers
  }

  updateFollowers(followers, posts, allPosts, currentUser) {
    var copy = followers
    posts = allPosts.filter(post => copy.indexOf(post["author"]) != -1)
    allPosts.filter(post => {
      if (post['author'] == currentUser["username"]) {
        posts.push(post)
      }
    })
    return posts
  }
}
