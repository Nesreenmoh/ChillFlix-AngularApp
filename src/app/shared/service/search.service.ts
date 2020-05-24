import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public content = new BehaviorSubject<string>('');
  public searchText = this.content.asObservable();
  constructor() {}

  sendSearchTerm(value) {
    this.content.next(value);
  }
}
