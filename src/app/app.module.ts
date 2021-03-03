import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPromptComponent } from './components/add-prompt/add-prompt.component';
import { ListPromptsComponent } from './components/list-prompts/list-prompts.component';
import { DetailsPromptComponent } from './components/details-prompt/details-prompt.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPromptComponent,
    ListPromptsComponent,
    DetailsPromptComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
