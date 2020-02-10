import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@app/user/user.service';

import { AuthenticationComponent } from '@app/user/authentication/authentication.component';
import { RegisterComponent } from '@app/user/register/register.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    UserService
  ],
  exports: [
    AuthenticationComponent,
    RegisterComponent
  ]
})
export class UserModule { }
