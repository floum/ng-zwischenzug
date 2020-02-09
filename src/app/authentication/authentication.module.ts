import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AuthenticationComponent, RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class AuthenticationModule { }
