import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puzzle } from '@app/puzzle/puzzle.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  apiURL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  practice = (): Observable<any> => {
    return this.http.get(`${this.apiURL}/practice.json`);
  }
}
