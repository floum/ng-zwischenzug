import { Component, OnInit } from '@angular/core';
import { PuzzleService } from '@app/puzzle/puzzle.service';
import { UserService } from '@app/user/user.service'
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
  lastMove: string;
  currentChallengeIndex: number = 0;
  orientation: string;

  puzzleAttempt: any;

  constructor(
    private puzzleService: PuzzleService,
    private userService: UserService
  ) { }


  ngOnInit() {
    this.currentChallengeIndex = 0
    this.puzzleAttempt = {}
    this.puzzleAttempt.success = true
    this.puzzleAttempt.userId = this.userService.currentUserValue.id

    this.puzzleService.practice().subscribe(x => {
      this.puzzle = x
      this.currentFen = this.currentChallenge.fen
      this.puzzleAttempt.puzzleId = this.puzzle.id
    });
  }

  fenChange = (fen) => {
    if (!this.currentChallenge.expected_fens.includes(fen)) {
      this.puzzleAttempt.success = false
      console.log('FAILURE')
    } else {
      console.log('SUCCESS')
    }
    this.setupNextChallenge()
  }

  get currentChallenge() {
    return this.puzzle.challenges[this.currentChallengeIndex];
  }

  playContinuation(challenge) {
    const numbers = interval(300)
    this.lastMove = undefined

    numbers.pipe(take(challenge.continuation.length)).subscribe(i =>
      this.currentFen = challenge.continuation[i]
    )
  }

  setupNextChallenge() {
    this.currentChallengeIndex += 1
    if (this.currentChallengeIndex < this.puzzle.challenges.length) {
      this.currentFen = this.currentChallenge.fen
    } else {
      console.log('PUZZLE Complete')
    }
  }
}
