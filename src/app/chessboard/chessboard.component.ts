import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Chessground } from 'chessground';
const Chess = require('chess.js')

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChessboardComponent implements OnInit {
  @ViewChild('board', {static: true}) board: ElementRef;

  private chessboard: any;
  private game: any;

  constructor() { }

  ngOnInit() {
    this.chessboard = Chessground(this.board.nativeElement)
    this.game = new Chess()
    this.setBoardLegalMoves()

  }

  setBoardLegalMoves = () => {
    this.chessboard.set({
      movable: {
        free: false,
        dests: this.legalMoves(),
        color: this.game.turn() == 'w' ? 'white': 'black',
        events: {
          after: this.boardMove()
        }
      }
    })
  }

  boardMove = () => {
    return (orig, dest)=> {
      const move = {from: orig, to: dest}
      this.game.move(move)
      this.setBoardLegalMoves()
    }
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
