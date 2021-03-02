import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import BearPrompt from 'src/app/models/BearPrompt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:Boolean = false;
  userData: any;

  constructor(public  afAuth:  AngularFireAuth, public  router:  Router) {
    this.afAuth.authState.subscribe( user => {
      if(user) {
        this.userData = user;
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(this.userData));
        console.log(this.userData);
      }
      else {
        localStorage.setItem('user', null);
        this.isLoggedIn = false;
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  testLogin() {
  }

  SignIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        // this.ngZone.run(() => {
        //   this.router.navigate(['dashboard']);
        // });
        this.isLoggedIn = true;
        this.SetUserData(result.user);
      }).catch((error) => {
        this.isLoggedIn = false;
        window.alert(error.message)
      })
  }

  SetUserData(user) {
    //const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      //this.router.navigate(['sign-in']);
    })
  }
}
