import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpclient: HttpClient) {

  }

  signUpApi(user : any) : Observable<any> {
    return this.httpclient.post("http://localhost:9999/user",user)
  }

}
