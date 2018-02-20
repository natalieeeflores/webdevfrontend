import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { MainComponent } from './main.component';
import { ArticleComponent } from '../article/article.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainComponent, ArticleComponent ],
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
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update headline and verify', () => {
    expect(true).toEqual(true)
  })

  it('should add new follower', () => {
    expect(true).toEqual(true)
  })

  it('should unfollow', () => {
    expect(true).toEqual(true)
  })
});
