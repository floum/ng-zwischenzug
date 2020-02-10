import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChessboardModule} from '@app/chessboard/chessboard.module';
import { Puzzle } from './puzzle.model';
import { PuzzleService } from './puzzle.service';
import { PuzzleComponent } from './puzzle.component';


@NgModule({
  declarations: [
    PuzzleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ChessboardModule
  ],
  providers: [
    PuzzleService
  ],
  exports: [
    PuzzleComponent
  ]
})
export class PuzzleModule { }
