import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly serverUrl = 'http://localhost:8080';
  private readonly apiUrl = `${this.serverUrl}/api/users`;
  private readonly users: User[] = [];
  constructor(private readonly http: HttpClient) {}

  /**
   * Adds a user to the array
   */
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }

  /**
   * retrieve all users
   */
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  /**
   * delete User method
   */

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ ${id}`);
  }

  /**
   * update User method
   */
  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${user.id}`, user);
  }

  /**get user by ID */
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
