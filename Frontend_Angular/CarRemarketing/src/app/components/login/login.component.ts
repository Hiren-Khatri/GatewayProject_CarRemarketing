import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: '',
  };

  userRegitrationDetails = {
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onLoginSubmit() {
    if (
      this.checkForNonEmptyOrNotNull(this.credentials.username) &&
      this.checkForNonEmptyOrNotNull(this.credentials.password)
    ) {
      //submit the form
      this.loginService.generateToken(this.credentials).subscribe(
        (response: any) => {
          //success
          this.loginService.loginUser(response.token);
          window.location.href = '/dashboard';
        },
        (error) => {
          //error
          console.log(error);
          if(error.status == 401){
            alert("Invalid Email or Password!!!")
          }
        }
      );
    } else {
      alert('Fields are empty!!');
    }
  }

  onRegisterSubmit() {
    if (
      this.checkForNonEmptyOrNotNull(this.userRegitrationDetails.name) &&
      this.checkForNonEmptyOrNotNull(this.userRegitrationDetails.email) &&
      this.checkForNonEmptyOrNotNull(this.userRegitrationDetails.password) &&
      this.checkForNonEmptyOrNotNull(this.userRegitrationDetails.phone) &&
      this.userRegitrationDetails.confirmPassword ==
        this.userRegitrationDetails.password
    ) {
      console.log(this.userRegitrationDetails);
    } else {
      alert('Empty Field');
    }
  }

  checkForNonEmptyOrNotNull(value: any) {
    if (value == '' || value == null || value == undefined) {
      return false;
    } else {
      return true;
    }
  }
}
