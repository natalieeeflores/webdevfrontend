import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationFormComponent } from './auth/registration-form/registration-form.component';
import { AppRoutingModule } from './app-routing.module';

import * as $ from 'jquery';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { EditArticleDialogComponent } from './article/edit-article-dialog/edit-article-dialog.component';
import { ImagePreviewComponent } from './article/image-preview/image-preview.component';
import { UpdateProfilePicComponent } from './profile/update-profile-pic/update-profile-pic.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthComponent,
    MainComponent,
    ProfileComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    EditArticleDialogComponent,
    ImagePreviewComponent,
    UpdateProfilePicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  entryComponents: [
    EditArticleDialogComponent,
    ImagePreviewComponent,
    UpdateProfilePicComponent
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
