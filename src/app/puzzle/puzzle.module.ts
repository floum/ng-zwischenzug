import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '@app/shared/jwt.interceptor';

import { ChessboardModule} from '@app/chessboard/chessboard.module';
import { Puzzle } from './puzzle.model';
import { PuzzleService } from './puzzle.service';
import { UserPuzzleService } from '@app/user/user-puzzle.service';
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
    PuzzleService,
    UserPuzzleService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  exports: [
    PuzzleComponent
  ]
})
export class PuzzleModule { }
