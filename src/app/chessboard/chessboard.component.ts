import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chessground } from 'chessground';
const Chess = require('chess.js');

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {
  @ViewChild('board', {static: true}) board: ElementRef;

  constructor() { }

  ngOnInit() {
    this.board = Chessground(this.board.nativeElement)
    this.game = new Chess()

    this.board.set({
      movable: {
        free: false,
        dests: this.legalMoves(),
        color: this.game.turn() == 'w' ? 'white': 'black'
      }
    })
  }

  legalMoves = () => {
    const dests = {}
    this.game.SQUARES.forEach(s => {
      const ms = this.game.moves({square: s, verbose: true})
      if (ms.length) dests[s] = ms.map(m => m.to)
    });
    return dests
  }

}
