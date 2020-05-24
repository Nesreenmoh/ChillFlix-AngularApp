import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YoutubePipe } from './shared/pipe/youtube.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoryComponent } from './admin/category/category.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UserComponent } from './admin/user/user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { VideoComponent } from './admin/video/video.component';
import { UpdateVideoComponent } from './admin/update-video/update-video.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DeleteconfirmationmodalComponent } from './modal/deleteconfirmationmodal/deleteconfirmationmodal.component';
import { HomeCategoryComponent } from './home/home-category/home-category.component';
import { HomeVideoComponent } from './home/home-video/home-video.component';
import { VideoDetailsComponent } from './home/home-video/video-details/video-details.component';
import { HomeShowcaseComponent } from './home/home-showcase/home-showcase.component';
import { MoviesComponent } from './home/moviesmenu/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePipe,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    UpdateCategoryComponent,
    UserComponent,
    UpdateUserComponent,
    VideoComponent,
    UpdateVideoComponent,
    OverviewComponent,
    SidebarComponent,
    DeleteconfirmationmodalComponent,
    HomeCategoryComponent,
    HomeVideoComponent,
    VideoDetailsComponent,
    HomeShowcaseComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgbAlertModule,
    NgbPaginationModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
