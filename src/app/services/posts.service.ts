import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { getPostsParamsType } from '../types/httpParamsType';
import { postResponseType } from '../types/postResponseType';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  API_BASE = environment.envVar.API_BASE;

  constructor(private http: HttpClient) {
  }

  getPosts(params: getPostsParamsType) {
    return this.http.get<postResponseType>(`${this.API_BASE}/blog/`, { params: params });
  }
}
