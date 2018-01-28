import { Component, OnInit, Input, ElementRef } from '@angular/core';

// @ViewChild('btnLogin') el:ElementRef
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

	login:string;
	password:string;

  constructor() { }

  ngOnInit()
  {

  }

  onLogin(keyCode)
  {
    if(keyCode == 13)
    {
      this.checkUser();
    }
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
