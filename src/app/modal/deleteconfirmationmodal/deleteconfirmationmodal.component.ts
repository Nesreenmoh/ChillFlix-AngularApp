import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-deleteconfirmationmodal',
  templateUrl: './deleteconfirmationmodal.component.html',
  styleUrls: ['./deleteconfirmationmodal.component.css'],
})
export class DeleteconfirmationmodalComponent {
  public title: string;
  public text: string;
  constructor(public readonly activeModal: NgbActiveModal) {}
}
