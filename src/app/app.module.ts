import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChessboardModule } from './chessboard/chessboard.module';

import { PuzzleModule } from './puzzle/puzzle.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChessboardModule,
    PuzzleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
