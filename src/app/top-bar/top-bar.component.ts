import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  title = 'Home Page';

  isUserSignedIn: string;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.isUserSignedIn = localStorage.getItem('isLoggedIn');
  }

  logout(){
    this.authService.logout();
  }
}
