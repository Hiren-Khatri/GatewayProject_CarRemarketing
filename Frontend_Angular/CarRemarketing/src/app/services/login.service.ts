import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = 'http://localhost:8080';

  constructor(private http:HttpClient) {}

  //calling the api to validate creadentials and generate token if valid
  generateToken(credentials:any){
    //call getToken api
    return this.http.post(`${this.url}/getToken`,credentials)
  }


  //for loging in user
  loginUser(token) {
    localStorage.setItem('token', token);
    return true;
  }

  //check for user is already logged in or not
  //if user is logged in the token is stored in localstorage
  //if token value in localstorage in null or empty -> user is not logged in
  isUserLoggedIn() {
    let token = this.getToken();
    console.log(token);
    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }

  //perform logout -> remove value of token from localstorage
  logout() {
    localStorage.removeItem('token');
    return true;
  }

  //for getting token
  getToken(){
    return localStorage.getItem("token")
  }
}
