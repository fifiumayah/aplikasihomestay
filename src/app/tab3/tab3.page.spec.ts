import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthProvider {
 constructor() {
        // console.log("belum dipake");
    }

    public login(credentials) {
        return new Promise((resolve, reject) => {
         if (credentials.username == "" || credentials.password == "") {
          reject("Username / password harus diisi")
         } else if (credentials.username == "admin" && credentials.password=="admin") {
          localStorage.setItem("isLogin", "true");
          resolve("Berhasil Login")
         } else {
          reject("Username / password salah");
         }
        })
    }

    public logOut() {
        localStorage.setItem("isLogin", "false");
    }
}

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
