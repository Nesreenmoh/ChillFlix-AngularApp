import { Injectable } from '@angular/core';
import { Video } from '../model/video.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/videos`;
  private readonly videos: Video[] = [];

  constructor(private readonly http: HttpClient) {}

  /** add video to my database */
  public addVideo(video: Video): Observable<Video> {
    return this.http.post<Video>(this.apiUrl, video);
  }

  public getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.apiUrl);
  }

  public getVideoById(id: string): Observable<Video> {
    return this.http.get<Video>(`${this.apiUrl}/${id}`);
  }

  public deleteVideo(id: string): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }

  updateVideo(video: Video, id: string): Observable<void> {
    console.log(typeof id);
    return this.http.put<void>(`${this.apiUrl}/${id}`, video);
  }
}
