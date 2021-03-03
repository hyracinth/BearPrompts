import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  errorMsg: string = '';
  currSignInUser: SignInUser = new SignInUser();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signInUser() {
    console.log(this.currSignInUser);
    this.errorMsg = '';

    if(this.currSignInUser.email == null || this.currSignInUser.password == null || this.currSignInUser.email == '' || this.currSignInUser.password == '') {
      this.errorMsg = "Both fields are required!";
    }
    else {
      this.authService.signIn(this.currSignInUser.email, this.currSignInUser.password);
    }
  }
}

export class SignInUser {
  email: string;
  password: string;
}