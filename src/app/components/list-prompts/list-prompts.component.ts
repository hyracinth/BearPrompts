import { Component, OnInit } from '@angular/core';
import { PromptsService } from 'src/app/services/prompts.service';
import { map } from 'rxjs/operators';
import BearPrompt from 'src/app/models/BearPrompt';

@Component({
  selector: 'app-list-prompts',
  templateUrl: './list-prompts.component.html',
  styleUrls: ['./list-prompts.component.css']
})
export class ListPromptsComponent implements OnInit {

  bearPrompts: any;
  currPrompt = null;
  currIndex = -1;
  title = '';

  constructor(private promptService: PromptsService) { }

  ngOnInit(): void {
    this.retrievePrompts();
  }

  refreshList(): void {
    this.currPrompt = null;
    this.currIndex = -1;
    this.retrievePrompts();
  }

  retrievePrompts(): void {
    this.promptService.getAll().snapshotChanges().pipe(
      map((changes: any[]) => 
        changes.map( c => 
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.bearPrompts = data;
    })
  }

  setActivePrompt(selectedPrompt: null, selectedInd: number): void {
    this.currPrompt = selectedPrompt;
    this.currIndex = selectedInd;
  }

  removeAllPrompts(): void {
    this.promptService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }

}
