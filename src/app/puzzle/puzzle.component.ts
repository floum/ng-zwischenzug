import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '@app/puzzle/puzzle.service';
import { Puzzle } from '@app/puzzle/puzzle.model';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {
  puzzle: any;

  constructor(
    private puzzleService: PuzzleService
  ) { }

  ngOnInit() {
    this.puzzleService.practice().subscribe(x => {
      this.puzzle = x;
    });
  }

}
