import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpclient: HttpClient) {

  }

  signUpApi(user : any) : Observable<any> {
    return this.httpclient.post(environment.uri+"/user",user)
  }

}
