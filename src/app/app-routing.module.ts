import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPromptComponent } from './components/add-prompt/add-prompt.component';
import { ListPromptsComponent } from './components/list-prompts/list-prompts.component';

const routes: Routes = [
  { path: '', redirectTo: 'bearPrompts', pathMatch: 'full' },
  { path: 'bearPrompts', component: ListPromptsComponent },
  { path: 'add', component: AddPromptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
