import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './login.entities';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: string;
  psw: string;

  usersList: User[];
  showAlert: boolean = false;
  
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginService.getUsers().subscribe(data => {
      this.usersList = data;
    });
  }

  login(): void {
    this.usersList.forEach(user => {
      if (user.usuario === this.user && user.contraseña === this.psw) {
        this.showAlert = false;
        this.router.navigateByUrl('');
      } else this.showAlert = true;
    })
  }

}
