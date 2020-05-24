import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { HttpClient } from '@angular/common/http';
import { Video } from '../model/video.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/categories`;
  private readonly videoUrl = `${this.serverUrl}/api/categories/videos`;
  private readonly categories: Category[] = [];
  constructor(private readonly http: HttpClient) {}

  /**
   * Adds a category to the array
   */
  public addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, category);
  }

  /**
   * retrieve all categories
   */
  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  public getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
  /**
   * delete category method
   */

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /**
   * update category method
   */
  updateCategory(category: Category, id: number): Observable<void> {
    console.log(typeof id);
    return this.http.put<void>(`${this.apiUrl}/ ${id}`, category);
  }

  /** get all videos by category */
  getAllVideosByCategory(name: string): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.videoUrl}/${name}`);
  }
}
