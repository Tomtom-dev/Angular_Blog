import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from '../models/comment';
import { Post } from '../models/post';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.typicode_url}/users`);
  }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.typicode_url}/posts`)
  }

  getComments(id : number): Observable<Comment>{
    return this.http.get<Comment>(`${environment.typicode_url}/posts/${id}/comments`)
  }

}
