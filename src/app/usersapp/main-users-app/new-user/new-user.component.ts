import { Component, OnInit } from '@angular/core';
import {UserServiceService} from './../../user-service/user-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private userService:UserServiceService) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('creating user');
  }
}
