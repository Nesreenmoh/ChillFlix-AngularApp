import { Component, OnInit } from '@angular/core';
import { UserService } from './../shared/service/user.service';
import { MenuInteractionService } from '../shared/service/menu-interaction.service';
import { Router } from '@angular/router';
import { SearchService } from '../shared/service/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public menus: string[] = ['home', 'tv Shows', 'movies', 'kids'];
  public signedIn: boolean = false;
  public username: string = '';
  public showSearch: boolean;
  private _searchTerm: string;

  /** getter and setter for textbox value*/
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.searchService.sendSearchTerm(value);
  }

  constructor(
    private readonly userService: UserService,
    private menuInteraction: MenuInteractionService,
    private _router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {}

  public get isSignedIn() {
    this.username = localStorage.getItem('token');
    return this.userService.loggedIn();
  }

  signout() {
    localStorage.clear();
    this.signedIn = false;
  }

  sendMenuItem(menuItem) {
    this.menuInteraction.sendMenuItem(menuItem);
    this._router.navigate(['../movies/', menuItem]);
    this.showSearch = true;
    return false;
  }
}
