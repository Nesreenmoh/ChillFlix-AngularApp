import { Component, OnInit, OnChanges } from '@angular/core';
import { VideoService } from '../../shared/service/video.service';
import { Video } from '../../shared/model/video.model';
import { MenuInteractionService } from '../../shared/service/menu-interaction.service';
import { SearchService } from '../../shared/service/search.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  public videos: Video[] = [];
  public filteredVideos: Video[] = [];
  public categoryName: string;

  constructor(private videoService: VideoService, private menuInteraction: MenuInteractionService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.menuInteraction.shareMenu.subscribe((menuItem) => {
      this.categoryName = menuItem;
      console.log('Menu is ' + this.categoryName);
      this.videoService.getAllVideos().subscribe((videos) => {
        this.videos = videos;
        this.filteredVideos = this.videos.filter((videos) => videos.type === this.categoryName);
      });
    });
    this.searchService.searchText.subscribe((value) => {
      this.filteredVideos = this.filteredVideosMethod(value).filter((videos) => videos.type === this.categoryName);
    });
  }

  filteredVideosMethod(value: string) {
    return this.videos.filter((videos) => videos.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }
}
