import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from '@app/authentication/authentication.service';


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
