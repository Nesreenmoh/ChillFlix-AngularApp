import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { User } from '../../shared/model/user.model';
import { UserService } from '../../shared/service/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteconfirmationmodalComponent } from '../../modal/deleteconfirmationmodal/deleteconfirmationmodal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  public user: User[] = [];
  public name: string;
  public password: string;
  public type: string;
  constructor(private userService: UserService, private readonly ngbModalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getUsers().subscribe((users) => {
      this.user = users;
    });
  }

  addUser() {
    if (this.name === '' || this.password === '') {
      Swal.fire('Please Enter a user name and password');
    } else {
      const user: User = {
        name: this.name,
        pwd: this.password,
        type: this.type,
      };
      this.userService.addUser(user).subscribe(() => {
        Swal.fire('The user has been added!');
        this.getAllUsers();
      });
    }
  }

  deleteUser(id: number) {
    console.log('The video is' + id);
    const modal = this.ngbModalService.open(DeleteconfirmationmodalComponent);
    const modalComponent: DeleteconfirmationmodalComponent = modal.componentInstance;
    modalComponent.title = 'Delete Confirmation';
    modalComponent.text = `Are you sure you want to delete the video with ${id} id?`;
    modal.result.then(() => {
      this.userService.deleteUser(id).subscribe(
        (data) => {
          this.getAllUsers();
          this.name = '';
          this.password = '';
          Swal.fire('Success', 'The user has been deleted', 'success');
        },
        (err) => {
          console.log(err);
        }
      );
    });
    return false;
  }
}
