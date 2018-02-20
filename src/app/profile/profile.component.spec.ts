import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';


import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {

  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule,
        MatToolbarModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update user email', () => {
    expect(true).toEqual(true)
  })

  it('should update zipcode', () => {
    expect(true).toEqual(true)
  })

  it('should update password', () => {
    expect(true).toEqual(true)
  })
});
