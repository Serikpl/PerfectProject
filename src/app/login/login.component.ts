import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	login:string;
	password:string;

  constructor() { }

  ngOnInit()
  {

  }

  onLogin()
  {

    this.checkUser();
  }

  checkUser()
  {
    let log_1 = 'admin';
    let pas_1 = '1234';

    if(this.login == log_1 && this.password == pas_1)
    {
      window.location.href = '/dashboard';
    }
    else
    {
      console.log('dont correct data');
    }

  }

}
