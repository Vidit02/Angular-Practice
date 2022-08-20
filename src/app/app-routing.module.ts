import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [{
  component: LoginComponent,
  path: "login"
},
{
  component : SignupComponent,
  path : "signup"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
