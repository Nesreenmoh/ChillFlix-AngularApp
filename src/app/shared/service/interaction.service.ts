import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Video } from '../model/video.model';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private video: Video;
  public content = new BehaviorSubject<Video>(this.video);
  public shareVideo = this.content.asObservable();
  constructor() {}

  sendVideo(video) {
    this.video = video;
    this.content.next(this.video);
  }
}
