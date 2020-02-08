import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Puzzle } from './puzzle.model';
import { PuzzleService } from './puzzle.service';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PuzzleService
  ]
})
export class PuzzleModule { }
