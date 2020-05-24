import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { CategoryComponent } from './admin/category/category.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { VideoComponent } from './admin/video/video.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './admin/user/user.component';
import { OverviewComponent } from './admin/overview/overview.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UpdateVideoComponent } from './admin/update-video/update-video.component';
import { VideoDetailsComponent } from './home/home-video/video-details/video-details.component';
import { MoviesComponent } from './home/moviesmenu/movies.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'category',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'video',
    component: VideoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: SidebarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'category/edit/:id',
    component: UpdateCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'overview/edit/:id',
    component: UpdateVideoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'videodetails/:id',
    component: VideoDetailsComponent,
  },
  {
    path: 'movies/:id',
    component: MoviesComponent,
  },
  {
    path: 'user/edit/:id',
    component: UpdateUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
