import { Component, OnInit, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Category } from '../../shared/model/category.model';
import { CategoryService } from '../../shared/service/category.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteconfirmationmodalComponent } from '../../modal/deleteconfirmationmodal/deleteconfirmationmodal.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public categories: Category[] = [];
  public confirmDelete: boolean = false;
  public categoryName: string = '';

  constructor(private categoryService: CategoryService, private readonly ngbModalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllCategories();
  }

  /**
   * retrieve the categories
   */
  getAllCategories() {
    const categories$ = this.categoryService.getCategories();
    categories$.subscribe((categories) => {
      this.categories = categories;
      // console.log(this.categories);
    });
  }

  /**
   * add category
   */

  addCategory() {
    if (this.categoryName === '') {
      Swal.fire('Opps', 'Please Enter a category name.', 'error');
    } else {
      const newCategory: Category = {
        name: this.categoryName,
      };
      this.categoryService.addCategory(newCategory).subscribe((category) => {
        Swal.fire(`We added a category with id ${category.id}!`);
        this.getAllCategories();
        this.categoryName = '';
      });
    }
  }
  /**
   *
   * @param id delete Category by Id
   */
  deleteCategory(id: number) {
    const modal = this.ngbModalService.open(DeleteconfirmationmodalComponent);
    const modalComponent: DeleteconfirmationmodalComponent = modal.componentInstance;
    modalComponent.title = 'Delete Confirmation';
    modalComponent.text = `Are you sure you want to delete the category of ${id}?`;

    modal.result.then(
      () => {
        this.categoryService.deleteCategory(id).subscribe((data) => {
          Swal.fire('Success', 'The Category has been deleted', 'success');
          this.getAllCategories();
        });
      },
      (error) => {
        console.log(error);
      }
    );
    return false;
  }
}
