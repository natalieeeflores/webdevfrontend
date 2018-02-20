import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Login } from  './login'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  model = new Login('', '')

  onSubmit() {
  this.http.post('https://webdevbackend.herokuapp.com/login',
    { "username": this.model["username"],
    "password": this.model["password"] }, { withCredentials: true }).subscribe(data => {
      if (data['result'] == 'success') {
        this.router.navigateByUrl('/main')
      }
    })
  }
}
