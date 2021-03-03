import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService) {}

  public get authenticated(): Boolean {
    return this.authService.Authenticated();
  }

  public signOut() {
    this.authService.SignOut();
  }
}

