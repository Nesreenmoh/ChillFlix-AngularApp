import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/shared/model/category.model';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Video } from 'src/app/shared/model/video.model';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.css'],
})
export class HomeCategoryComponent implements OnInit {
  public categories: Category[] = [];
  @Input() public myCategory: Category;
  // @Output() public myReceivedVideo: EventEmitter<Video> = new EventEmitter<Video>();
  public categoryName: string;
  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    console.log(this.myCategory);
  }

  // videoToShow(video) {
  //   this.myReceivedVideo.emit(video);
  // }
}
