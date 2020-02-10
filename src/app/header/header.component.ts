import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/user/user.service';
import { User } from '@app/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;
  
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUserValue;
  }

}
