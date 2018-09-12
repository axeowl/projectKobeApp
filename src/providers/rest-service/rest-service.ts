import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  getProducts(id) {
    return new Promise(resolve => {
      this.http.get('https://projectkobe.herokuapp.com/getproduct'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  deleteProduct(id) {
    return new Promise(resolve => {
      this.http.get('https://projectkobe.herokuapp.com/deleteproduct'+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  registerNewUser(email,username,password) {
    return new Promise(resolve => {
      this.http.get('https://projectkobe.herokuapp.com/register'+email+'/'+username+'/'+password).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  validateUser(email,password) {
    return new Promise(resolve => {
      this.http.get('https://projectkobe.herokuapp.com/login'+email+'/'+password).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUserInfo(email) {
    return new Promise(resolve => {
      this.http.get('https://projectkobe.herokuapp.com/userinfo'+email).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
