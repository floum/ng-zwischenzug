import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserPuzzleService {
  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create = (userPuzzle: any): Observable<any> => {
    return this.http.post(`${this.apiURL}/user_puzzles`, userPuzzle)
  }
}
