import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../shared/model/video.model';
import { VideoService } from './../shared/service/video.service';
import { CategoryService } from '../shared/service/category.service';
import { Category } from '../shared/model/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'ChillFlix Movies';
  // @Output() public receivedVideo: EventEmitter<Video> = new EventEmitter<Video>();
  public categories: Category[] = [];

  constructor(private readonly categoryService: CategoryService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
  }

  // videoToShow(video) {
  //   this.receivedVideo.emit(video);
  // }
}
