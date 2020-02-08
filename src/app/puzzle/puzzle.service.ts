import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {
  apiURL: string = 'http://192.168.1.16:3000';

  constructor(private http: HttpClient) { }

  getUserPuzzle = (userId: number) => {
    return this.http.get(`${this.apiURL}/puzzles/${userId}`)
  }
}
