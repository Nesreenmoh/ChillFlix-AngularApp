import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';
import { Video } from 'src/app/shared/model/video.model';
import { InteractionService } from 'src/app/shared/service/interaction.service';

@Component({
  selector: 'app-home-video',
  templateUrl: './home-video.component.html',
  styleUrls: ['./home-video.component.css'],
})
export class HomeVideoComponent implements OnInit {
  @Input() public category: string;
  public videos: Video[] = [];
  // @Output() public video: EventEmitter<Video> = new EventEmitter<Video>();
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  constructor(private readonly categoryService: CategoryService, private readonly interaction: InteractionService) {}

  ngOnInit(): void {
    //  this.categoryName = this.activatedRoute.snapshot.paramMap.get('name');
    this.getAllVidoesByCategory();
  }

  getAllVidoesByCategory() {
    this.categoryService.getAllVideosByCategory(this.category).subscribe((videos) => {
      this.videos = videos;
    });
  }

  changeVideo(video) {
    this.interaction.sendVideo(video);
    return false;
  }
}
