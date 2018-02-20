import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './login-form/login-form.component'
import { RegistrationFormComponent } from './registration-form/registration-form.component'

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponent, LoginFormComponent, RegistrationFormComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatToolbarModule
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
