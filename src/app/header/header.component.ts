import { Component, OnInit } from '@angular/core';

import { UserService } from '@app/user/user.service';
import { User } from '@app/user/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUserValue;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
