import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListuserComponent } from './listuser/listuser.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [{
  component: LoginComponent,
  path: "login"
},{
  component : SignupComponent,
  path : "signup"
},{
  component : ListuserComponent,
  path : "listuser"
},{
  component : NotfoundComponent,
  path : "**"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
