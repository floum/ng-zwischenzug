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
  currentFen: string;

  constructor(
    private puzzleService: PuzzleService
  ) { }

  ngOnInit() {
    this.puzzleService.practice().subscribe(x => {
      this.puzzle = x;
      this.currentFen = x.challenges[0].fen;
    });
  }
  
  fenChange = (fen) => {
    this.currentFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
  }
}
