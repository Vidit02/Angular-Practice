import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.email);
    console.log(this.firstname);
    console.log(this.password);
  }

}
