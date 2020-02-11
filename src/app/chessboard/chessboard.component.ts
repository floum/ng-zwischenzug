import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() fen: string;
  @Output() change: EventEmitter = new EventEmitter();

  private chessboard: any;
  private game: any;

  constructor() {
  }

  ngOnInit() {
    this.chessboard = Chessground(this.board.nativeElement)
    this.game = new Chess()
  }

  ngOnChanges() {
    if (this.chessboard == undefined) {
      this.chessboard = Chessground(this.board.nativeElement)
      this.game = new Chess()
    }
    this.set({
      fen: this.fen
    })
  }

  set = (config: any) => {
    if (config.fen) {
      this.game.load(config.fen)
    }
    this.chessboard.set(config)
    this.setBoardLegalMoves()
  }

  setBoardLegalMoves = () => {
    this.chessboard.set({
      check: this.game.in_check(),
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
      this.set({
        fen: this.game.fen()
      })
      this.change.emit(this.game.fen())
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
