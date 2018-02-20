import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';


import { ArticleComponent } from './article.component';

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleComponent ],
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
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;

    component.searchQuery = "sed"
    component.posts = [
      {
        "poster": "Anna",
        "text": "Planner just came in the mail! So excited to use!"
      },
      {
        "poster": "Daniel",
        "text": "Can't wait to go cherry picking this spring"
      },
      {
        "poster": "Noah",
        "text": "Longing to go somewhere new...",
      }]

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the search keyword', () => {
    expect(component.searchQuery).toEqual("sed")
  })

});
