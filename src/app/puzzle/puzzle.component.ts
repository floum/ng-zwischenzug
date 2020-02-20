import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '@app/puzzle/puzzle.service';
import { PuzzleAttemptService } from '@app/puzzle/puzzle-attempt.service';
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
  complete: boolean;
  currentFen: string;
  lastMove: string;
  currentChallengeIndex: number = 0;
  orientation: string;

  puzzleAttempt: any;

  constructor(
    private puzzleService: PuzzleService,
    private puzzleAttemptService: PuzzleAttemptService
  ) { }


  ngOnInit() {
    this.orientation = undefined;
    this.currentChallengeIndex = 0
    this.complete = false
    this.puzzleAttempt = {}
    this.puzzleAttempt.success = true

    this.puzzleService.practice().subscribe(x => {
      this.puzzle = x
      this.currentFen = this.currentChallenge.fen
      this.puzzleAttempt.puzzleId = this.puzzle.id
    });
  }

  fenChange = (fen) => {
    if (!this.currentChallenge.expected_fens.includes(fen)) {
      this.puzzleAttempt.success = false
    } else {
    }
    this.setupNextChallenge()
  }

  setFen(fen) {
    this.currentFen = fen
  }

  get currentChallenge() {
    return this.puzzle.challenges[this.currentChallengeIndex];
  }

  setupNextChallenge() {
    this.currentChallengeIndex += 1
    if (this.currentChallengeIndex < this.puzzle.challenges.length) {
      this.currentFen = this.currentChallenge.fen
    } else {
      this.puzzleAttemptService.create(this.puzzleAttempt).subscribe(x => {
        this.complete = true
      })
    }
  }
}
