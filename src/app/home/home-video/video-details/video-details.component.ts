import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from './../../../shared/service/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
})
export class VideoDetailsComponent implements OnInit {
  private videoId: string;
  public videoUrl: string;

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly videoService: VideoService) {}
  ngOnInit(): void {
    this.videoId = this.activatedRoute.snapshot.paramMap.get('id');
    this.videoUrl = `https://www.youtube.com/embed/${this.videoId}?
rel=0&autoplay=1`;
  }
}
