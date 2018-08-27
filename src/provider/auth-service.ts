import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {

      this.currentUser = new User(credentials.email.slice(0,credentials.email.search('@')), credentials.email);
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        //let access = (credentials.password === credentials.password && credentials.email === credentials.email);
        // set thereal user
        observer.next(true);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      this.http.get('https://projectkobe.herokuapp.com/register{credential.email}/').subscribe(data => {
        console.log(data);
      }, err => {
        console.log(err);
      });
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
