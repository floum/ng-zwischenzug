import { Component } from '@angular/core';
import { AuthenticationService } from '@app/authentication/authentication.service';
import { User } from './user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User
  constructor (
    private authenticationService: AuthenticationService
  ) {
  }
}
