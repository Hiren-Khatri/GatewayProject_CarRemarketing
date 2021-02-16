import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  user:any={}

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  getUserDetails() {
    this.userService.getUserDetails().subscribe(
      (response) => {
        //success
        console.log(response);
        this.user = response;
      },
      (error) => {
        //error
        console.log(error);
        
      }
    );
  }
}
