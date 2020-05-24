import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  apiKey: string = 'YourYoutubeAPI';

  constructor(public http: HttpClient) {}

  /**
   * defining a method to get all videos of a channel
   * @param channel
   * @param maxResults
   */
  getVidesForChannel(channel, maxResults): Observable<Object> {
    const url =
      'https://www.googleapis.com/youtube/v3/search?key=' +
      this.apiKey +
      '&channelId=' +
      channel +
      '&order=date&part=snippet &type=video,id&maxResults=' +
      maxResults;
    return this.http.get(url).pipe(
      map((res) => {
        return res;
      })
    );
  }
  /**
   * method to get the categories of youtube
   */
  getVideosCategories() {
    let url = 'https://www.googleapis.com/youtube/v3/guideCategories?part=snippet&regionCode=US&key=' + this.apiKey;
    let obs = this.http.get(url);
    obs.subscribe((response) => console.log(response));
  }
  /**
   * search a video by a word
   */
  getYoutubeVideosByKeyword(keyword: string): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=' + keyword + '&maxResults=20&key=' + this.apiKey;
    return this.http.get(url);
  }

  getYoutubeVideosByVideoId(videoId: string): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&id=' + videoId + '&maxResults=20&key=' + this.apiKey;
    return this.http.get(url);
  }
}
