import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import fetch, { mock } from 'mock-fetch';
import { url, login, logout, updateHeadline } from '../profileActions';
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

const mockery = require('mockery');

describe('AppComponent', () => {
  beforeEach(async(() => {

    if (mockery.enable) {
      mockery.enable({warnOnUnregistered: false});
      mockery.registerMock('node-fetch', fetch);
      require('node-fetch');
    }

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));

  afterEach(() => {
    if (mockery.enable) {
      mockery.deregisterMock('node-fetch');
      mockery.disable();
    }
  });

  const createDOM = (username, password, message) => {
    const add = (tag, id, value) => {
      const el = document.createElement(tag);
      el.id = id;
      el.value = value;
      el.style = { display: 'inline' };
      document.body.appendChild(el);
      return el;
    };
    add('input', 'username', username);
    add('input', 'password', password);
    const d = add('div', 'message', message);
    d.innerHTML = message;
    return d;
  };

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  // it(`should not log in an invalid user`, async(() => {
  //   const div = createDOM('user', 'pass', 'hello')
  //   expect(div.innerHTML).toEqual('hello')
  //
  //   mock(`${url}/login`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   mock(`${url}/headlines`, {
  //     headers: { 'Content-Type': 'application/json' },
  //     json: {
  //       headlines: [{ username: 'hi', headline: 'ok' }]
  //     }
  //   })
  //
  //   login()
  //   .then(_ => {
  //     expect(div.innerHTML)
  //     .toEqual('"Unauthorized" when logging in')
  //   })
  // }));
  //
  // it(`should log this user in`, async(() => {
  //   const div = createDOM('guest', 'visitor', 'hello')
  //   expect(div.innerHTML).toEqual('hello')
  //
  //   mock(`${url}/login`, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   mock(`${url}/headlines`, {
  //     headers: { 'Content-Type': 'application/json' },
  //     json: {
  //       headlines: [{ username: 'hi', headline: 'ok' }]
  //     }
  //   })
  //
  //   login()
  //   .then(_ => {
  //     expect(div.innerHTML)
  //     .toEqual('you are logged in as guest "bye"')
  //   })
  // }));
  //
  // it('should update the headline', async(() => {
  //   const div = createDOM('guest', 'visitor', 'hello')
  //   expect(div.innerHTML).toEqual('hello')
  //
  //   // IMPLEMENT ME
  //   //   * mock the AJAX request to PUT headline
  //   //   * update the headline by calling updateHeadline(...)
  //   //   * Verify the new value of the headline in div.innerHTML
  //   mock(`${url}/headline`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  //   updateHeadline('bye')
  //   .then(_ => {
  //     expect(div.innerHTML).toEqual('bye');
  //   });
  // }));
  //
  // it(`should log the user out`, async(() => {
  //   const div = createDOM('guest', 'visitor', 'hello');
  //   expect(div.innerHTML).toEqual('hello');
  //
  //   mock(`${url}/logout`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  //   logout()
  //   .then(_ => {
  //     expect(div.innerHTML).toEqual('hello');
  //   });
  // }));
});
