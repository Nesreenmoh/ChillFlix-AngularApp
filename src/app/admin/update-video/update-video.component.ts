import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Video } from '../../shared/model/video.model';
import { Router, ActivatedRoute } from '@angular/router';
import { VideoService } from '../../shared/service/video.service';

@Component({
  selector: 'app-update-video',
  templateUrl: './update-video.component.html',
  styleUrls: ['./update-video.component.css'],
})
export class UpdateVideoComponent implements OnInit {
  public videoId: string;
  public title: string;
  public description: string;
  public video: Video;
  constructor(
    private readonly videoService: VideoService,
    private readonly activateRouter: ActivatedRoute,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.videoId = this.activateRouter.snapshot.params.id;
    this.videoService.getVideoById(this.videoId).subscribe((video) => {
      this.title = video.title;
      this.description = video.description;
      this.save(video);
    });
  }

  public save(video) {
    this.video = video;
  }
  public updateVideo() {
    console.log(this.video);
    const updatedVideo: Video = {
      id: this.video.id,
      title: this.title,
      description: this.description,
      url: this.video.url,
      published_date: this.video.published_date,
      rating: this.video.rating,
      date_added: this.video.date_added,
      type: this.video.type,
      category: {
        id: this.video.category.id,
        name: this.video.category.name,
      },
    };
    this.videoService.updateVideo(updatedVideo, updatedVideo.id).subscribe(() => {
      Swal.fire('Success', 'The Video has been updated', 'success');
      this._router.navigate(['../../../overview']);
    });
  }
}
