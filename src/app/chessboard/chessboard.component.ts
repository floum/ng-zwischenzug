import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chessground } from 'chessground';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.scss']
})
export class ChessboardComponent implements OnInit {
  @ViewChild('board', {static: true}) board: ElementRef;

  constructor() { }

  ngOnInit() {
    Chessground(this.board.nativeElement)
  }

}
