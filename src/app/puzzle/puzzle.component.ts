import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '@app/puzzle/puzzle.service';
import { Puzzle } from '@app/puzzle/puzzle.model';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

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
    this.currentChallengeIndex = 0

    this.puzzleService.practice().subscribe(x => {
      console.log(x)
      this.puzzle = x
      this.currentFen = this.currentChallenge.fen
    });
  }
  
  fenChange = (fen) => {
    console.log(fen)
    console.log(this.currentChallenge.expected_fens)
    if (this.currentChallenge.expected_fens.includes(fen)) {
      console.log('SUCCESS')
    }
    this.playCurrentChallenge()
  }

  get currentChallenge() {
    return this.puzzle.challenges[this.currentChallengeIndex];
  }

  playCurrentChallenge() {
    const numbers = interval(300)

    numbers.pipe(take(this.currentChallenge.continuation.length)).subscribe(i =>
      this.currentFen = this.currentChallenge.continuation[i]
    )
  }
}
