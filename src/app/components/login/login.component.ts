import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  psw: string;
  
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getUsers().subscribe(data => {
      console.log(data)
    })
  }

}
