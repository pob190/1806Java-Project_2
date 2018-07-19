import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails(username: String, password: String) {
    // post user details here
    if (username === 'test' && password === 'test') {
        return true;
    } else {
      return false;
    }
  }
}
