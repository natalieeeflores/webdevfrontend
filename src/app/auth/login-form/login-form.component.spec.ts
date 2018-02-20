import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { By } from '@angular/platform-browser';

import { LoginFormComponent } from './login-form.component';

class RouterStub {
  navigateByUrl(url: string) { return url; }
}

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
