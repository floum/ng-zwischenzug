import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PuzzleModule } from '@app/puzzle/puzzle.module';
import { UserModule } from '@app/user/user.module';

import { PuzzleComponent } from '@app/puzzle/puzzle.component';
import { AuthenticationComponent } from '@app/user/authentication/authentication.component';
import { RegisterComponent } from '@app/user/register/register.component';

const routes: Routes = [
  { path: '', component: PuzzleComponent },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [PuzzleModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

