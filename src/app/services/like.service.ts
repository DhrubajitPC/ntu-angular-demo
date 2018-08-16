import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  baseUrl = '/api';
  constructor(private http: HttpClient) {  }

  getAngularLikes(): Promise<any> {
    return this.http.get(`${this.baseUrl}/angular`)
      .toPromise();
  }
  addAngularLikeCount(like: any): Promise<any> {
    return this.http.post(`${this.baseUrl}/angular`, like)
      .toPromise();
  }
  deleteAngularLikeCount(id: number): Promise<any> {
    return this.http.delete(`${this.baseUrl}/angular/${id}`)
      .toPromise();
  }
}
