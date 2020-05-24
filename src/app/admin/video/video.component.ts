import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { YoutubeService } from '../../shared/service/youtube.service';
import { CategoryService } from '../../shared/service/category.service';
import { VideoService } from '../../shared/service/video.service';
import { Category } from '../../shared/model/category.model';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  public keyword: string = '';
  url: string = 'https://www.youtube.com/watch?v=';
  public videos: any[];
  public myCategory: any;
  public selectedCategory: number;
  public videoData: any;
  public selectedVideo: any;
  public types: string[] = ['Movies', 'TV Shows'];
  public type: string = 'Movies';
  public added: boolean = false;
  public flag: boolean = false;
  public categoryName: string = 'Action';
  /**
   *
   *  private spinner: NgxSpinnerService
   */
  constructor(
    private spinner: NgxSpinnerService,
    private youtubeService: YoutubeService,
    private category: CategoryService,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.loadCategories();
    console.log('The type is' + this.type);
  }

  keyUp() {
    /**
     * replace the space to '+' in the search
     */
    this.videos = [];
    let searchWord = this.keyword.split(' ').join('+');
    this.youtubeService.getYoutubeVideosByKeyword(searchWord).subscribe((list) => {
      for (let element of list['items']) {
        this.videos.push(element);
      }
    });
    this.flag = true;
  }

  /** search for selected videos and add them to the list */
  addSelectedVideosToList() {
    if (this.type === '' || this.categoryName === '') {
      Swal.fire('opps', 'Please select a category name and type to add the videos', 'error');
    } else {
      const checkboxes: any = document.getElementsByName('mycheckbox');
      /** converting the nodlist to array */
      const SelectedCheckBoxes = Array.prototype.slice.call(checkboxes).filter((ch) => ch.checked === true);
      console.log(SelectedCheckBoxes);
      /** reading the array and get the values: video-id */
      SelectedCheckBoxes.forEach((checkbox) => {
        console.log(checkbox.value);
        this.getVideosData(checkbox.value);
      });
    }
  }

  /** load categories to the dropdown menu */
  loadCategories() {
    this.category.getCategories().subscribe((category) => {
      this.myCategory = category;
    });
  }

  /** get the data of a movie */
  getVideosData(videoId) {
    this.youtubeService.getYoutubeVideosByVideoId(videoId).subscribe((video_data) => {
      this.videoData = video_data;
      /** create a video object */
      this.selectedVideo = {
        id: this.videoData.items[0].id,
        title: this.videoData.items[0].snippet.title,
        description: this.videoData.items[0].snippet.description.slice(0, 200),
        url: this.videoData.items[0].snippet.thumbnails.high.url,
        published_date: this.videoData.items[0].snippet.publishedAt,
        date_added: new Date(Date.now()).toLocaleString().split(',')[0],
        type: this.type,
        category: {
          id: Number(this.selectedCategory),
          name: this.categoryName,
        },
      };
      /** add video to the database */
      this.videoService.addVideo(this.selectedVideo).subscribe((video) => {
        setTimeout(() => (this.added = true), 1000);
        Swal.fire('Success', 'Videos has been added to the DB', 'success');
        this.flag = false;
      });
    });
    return false;
  }

  onCategorysSelected(event: any) {
    let selectedIndex: number = event.target['selectedIndex'];
    this.categoryName = event.target.options[selectedIndex].getAttribute('name');
  }
}
