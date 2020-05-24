import { Component, OnInit } from '@angular/core';
import { UserService } from './../../shared/service/user.service';
import { User } from 'src/app/shared/model/user.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  public name: string;
  public password: string;
  public userId: number;
  public user: User;
  constructor(
    private readonly userService: UserService,
    private readonly _router: Router,
    private readonly activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.activateRouter.snapshot.params.id;
    this.userService.getUserById(this.userId).subscribe((user) => {
      this.name = user.name;
      this.password = user.pwd;
      this.save(user);
    });
  }

  /** to save the return object */
  public save(user) {
    this.user = user;
  }

  /** update the user method */
  public updateUser() {
    const updatedUser: User = {
      id: Number(this.userId),
      name: this.name,
      pwd: this.password,
    };
    this.userService.updateUser(updatedUser).subscribe(() => {
      Swal.fire('Success', 'The User has been updated', 'success');
      this._router.navigate(['../../../user']);
    });
  }
}
