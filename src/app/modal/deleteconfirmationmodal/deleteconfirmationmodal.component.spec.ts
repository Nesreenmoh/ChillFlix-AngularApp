import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfirmationmodalComponent } from './deleteconfirmationmodal.component';

describe('DeleteconfirmationmodalComponent', () => {
  let component: DeleteconfirmationmodalComponent;
  let fixture: ComponentFixture<DeleteconfirmationmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteconfirmationmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteconfirmationmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
