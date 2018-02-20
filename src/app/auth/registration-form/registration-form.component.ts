import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { NgIf } from '@angular/common';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Register } from './register'
import { RegisterService } from './register.service'


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
  providers: [ RegisterService ]
})
export class RegistrationFormComponent implements OnInit {

  constructor(private registerServ: RegisterService,
    private router: Router, private http: HttpClient) { }

    ngOnInit() {
    }

    model = new Register('', '', '', '', '', '', '', '', '')

    onSubmit() {
      var password = this.registerServ.checkPassword(this.model);
      var age = this.registerServ.verifyAge(this.model);

      if (password && age) {
        console.log('about to register')
        var profile = { "username": this.model["account_name"], "email": this.model["email"],
        "phone": this.model["phone"], "zipcode": this.model["zipcode"], "dob": this.model["dob"],
        "password": this.model["password"], "password_con": this.model["password_con"],
        "display_name": this.model["display_name"] }
        this.http.post('https://webdevbackend.herokuapp.com/register',
        profile, { withCredentials: true }).subscribe()
        this.router.navigateByUrl('/main')
        return
      } else if (!password) {
        $('#password_div').show()
      } else if (!age) {
        $('#dob_div').show()
      }
    }
  }
