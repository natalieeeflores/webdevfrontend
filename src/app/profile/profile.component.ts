import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Register } from '../auth/registration-form/register'
import { ProfileService } from './profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ HttpClient, ProfileService ]
})
export class ProfileComponent implements OnInit {
  user: Object
  auth: Object
  updatedInfo = new Register('', '', '', '', '', '', '', '', '')
  @ViewChild('fileInput') fileInput;
  constructor(private http: HttpClient,
    private profileService: ProfileService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.http.get('https://webdevbackend.herokuapp.com/profile',
    { withCredentials: true }).subscribe(data => {
      this.user = data['profile']
    })
    this.http.get('https://webdevbackend.herokuapp.com/user',
    { withCredentials: true }).subscribe(data => {
      console.log(data['user'][0])
    })
  }

  onSubmit() {
    if (this.updatedInfo.zipcode != '') {
      this.user["zipcode"] = this.updatedInfo.zipcode
      this.http.put('https://webdevbackend.herokuapp.com/zipcode',
      { "zipcode": this.updatedInfo.zipcode }, { withCredentials: true }).subscribe()
      this.updatedInfo.zipcode = ''
    }
    if (this.updatedInfo.email != '') {
      this.user["email"] = this.updatedInfo.email
      this.http.put('https://webdevbackend.herokuapp.com/email',
      { "email": this.updatedInfo.email }, { withCredentials: true }).subscribe()
      this.updatedInfo.email = ''
    }
    if (this.updatedInfo.phone != '') {
      this.user["phone"] = this.updatedInfo.phone
      this.http.put('https://webdevbackend.herokuapp.com/phone',
      { "phone": this.updatedInfo.phone }, { withCredentials: true }).subscribe()
      this.updatedInfo.phone = ''
    }
    if (this.updatedInfo.display_name != '') {
      this.user["display_name"] = this.updatedInfo.display_name
      this.http.put('https://webdevbackend.herokuapp.com/display',
      { "display": this.updatedInfo.display_name }, { withCredentials: true }).subscribe()
      this.updatedInfo.phone = ''
    }
    if (this.updatedInfo.password != '') {
      this.http.put('https://webdevbackend.herokuapp.com/password',
      { password: this.updatedInfo.password }, { withCredentials: true }).subscribe()
      this.updatedInfo.password = ''
      this.updatedInfo.password_con = ''
    }
  }

  updateAvatar() {
    this.profileService.readFile(this.fileInput, this.profileService.generateProfileDialog,
      this.user, this.dialog, this.http)
  }

  reLogin() {
    this.http.get("https://webdevbackend.herokuapp.com/user",
    { withCredentials: true}).subscribe(data => {
      console.log('merging existing data for: ', data["user"][0]["userName"])
      this.http.post("https://webdevbackend.herokuapp.com/link",
      { user: data["user"][0]["userName"] }, { withCredentials: true }).subscribe()
    })
  }
}
