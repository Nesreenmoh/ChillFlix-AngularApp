import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Video } from 'src/app/shared/model/video.model';
import { InteractionService } from 'src/app/shared/service/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-showcase',
  templateUrl: './home-showcase.component.html',
  styleUrls: ['./home-showcase.component.css'],
})
export class HomeShowcaseComponent implements OnInit, OnChanges {
  public title: string = 'Watch Anytime';
  public name: any;
  public description: string = 'Unlimited films, TV programmes and more.Watch everthing at any time.';

  public video: Video;

  constructor(private readonly interaction: InteractionService, private _router: Router) {}

  ngOnChanges(): void {}

  ngOnInit(): void {
    this.interaction.shareVideo.subscribe((video) => {
      this.video = video;
      const div = document.getElementById('focusme');
      div.focus();
    });
  }

  playVideo(videoId) {
    this._router.navigate(['../videodetails/', videoId]);
  }
}
