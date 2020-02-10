import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertService } from '@app/shared/alert.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AlertService
  ]
})
export class SharedModule { }
