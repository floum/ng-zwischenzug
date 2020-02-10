import { Component } from '@angular/core';
import { User } from '@app/user/user.model';
import { UserService } from '@app/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User
  constructor (
    private userService: UserService
  ) {
  }
}
