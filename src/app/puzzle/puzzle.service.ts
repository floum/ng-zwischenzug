import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Puzzle } from '@app/puzzle/puzzle.model';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  apiURL: string = 'http://192.168.1.16:3000';

  constructor(private http: HttpClient) { }

  practice = (): Observable<any> => {
    return this.http.get(`${this.apiURL}/practice.json`)
  }
}
