import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/model/category.model';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../shared/service/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css'],
})
export class UpdateCategoryComponent implements OnInit {
  public categoryId: number;
  public categoryName: string;
  public updatedCategory: Category;
  constructor(
    private readonly activateRoute: ActivatedRoute,
    private readonly categoryService: CategoryService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.categoryId = this.activateRoute.snapshot.params.id;
    this.getCategory();
  }

  getCategory() {
    this.categoryService.getCategoryById(this.categoryId).subscribe((category) => {
      this.categoryName = category.name;
    });
  }
  public updateCategory() {
    const newCategory: Category = {
      id: Number(this.categoryId),
      name: this.categoryName,
    };
    this.categoryService.updateCategory(newCategory, Number(newCategory.id)).subscribe(() => {
      Swal.fire('Success', 'The category has been updated', 'success');
      this._router.navigate(['../../../category']);
    });
  }
}
