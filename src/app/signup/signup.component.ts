import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../service/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name = "IT";
  email : string =  "";
  firstname : string = "" ;
  password : string = "";
  lastname : string = "";
  gender : string = "";


  constructor(private sessionService : SessionService , private toastr : ToastrService , private router : Router ) { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.email);
    console.log(this.firstname);
    console.log(this.password);
    console.log(this.lastname);
    console.log(this.gender);
    
    

    let user = {
      "firstname" : this.firstname,
      "email" : this.email,
      "password" : this.password,
      "lastname" : this.lastname,
      "gender" : this.gender,
      "active" : true
      // "lastname" : 
    }

    this.sessionService.signUpApi(user).subscribe(resp =>{
      console.log(resp);
      this.toastr.success(`${this.firstname} user added...`)
      this.router.navigateByUrl("listuser")
      // this.toastr.success("User Added...")
    }, err => {
      console.log(err);
      this.toastr.error("Error in Internet...")
    })
  }

}
