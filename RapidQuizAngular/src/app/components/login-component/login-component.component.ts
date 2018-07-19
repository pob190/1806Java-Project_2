import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;
    console.log(username);
    console.log(password);
      if (this.Auth.getUserDetails(username, password) === true) {
        console.log('good job.');
        this.router.navigate(['admin']);
      } else {
        console.log('not good job.');
      }
  }

}
