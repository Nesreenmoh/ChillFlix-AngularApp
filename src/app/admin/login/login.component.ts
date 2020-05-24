import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public name: string = '';
  public password: string = '';
  public validFlag: boolean = false;
  public notValid: boolean = false;
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  /**
   * get all users
   */
  getAllUsers() {
    this.userService.getUsers();
  }

  checkLogin() {
    console.log(this.name);
    console.log(this.password);
    const obs = this.userService.getUsers();
    obs.subscribe((users) => {
      console.log(users);
      for (var i: any = 0; i < users.length; i++) {
        if (users[i].name === this.name && users[i].pwd === this.password) {
          Swal.fire('Login Success!');
          this.validFlag = true;
          this.notValid = false;
          this.name = '';
          this.password = '';
          localStorage.setItem('token', users[i].name);
          this.router.navigate(['../admin']);
          break;
        } else {
          this.validFlag = false;
          this.notValid = true;
          Swal.fire('Username or Password is not correct');
        }
      }
    });
  }
}
