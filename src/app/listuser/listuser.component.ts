import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  constructor(private userService: UserService , private toastr:ToastrService) { }

  users : Array<any> = []

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers(){
    this.userService.getAllUserApi().subscribe(resp => {
      this.users = resp
      console.log(resp);
      
    })
  }

}
