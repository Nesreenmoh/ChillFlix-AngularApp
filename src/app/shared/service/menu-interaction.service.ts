import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuInteractionService {
  public menuItem: string;
  public content = new BehaviorSubject<string>('');
  public shareMenu = this.content.asObservable();
  constructor() {}

  sendMenuItem(menuItem) {
    this.menuItem = menuItem;
    this.content.next(this.menuItem);
  }
}
