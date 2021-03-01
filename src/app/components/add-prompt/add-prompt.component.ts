import { Component, OnInit } from '@angular/core';
import BearPrompt from 'src/app/models/BearPrompt';
import { PromptsService } from 'src/app/services/prompts.service';

@Component({
  selector: 'app-add-prompt',
  templateUrl: './add-prompt.component.html',
  styleUrls: ['./add-prompt.component.css']
})
export class AddPromptComponent implements OnInit {

  currBearPrompt: BearPrompt = new BearPrompt();
  submitted: Boolean = false;

  constructor(private promptsService: PromptsService) { }

  ngOnInit(): void {
  }

  savePrompt(): void {
    this.promptsService.create(this.currBearPrompt).then( () => {
      console.log('Created new prompt successfully.');
      this.submitted = true;
    })
  }

  resetPrompt(): void {
    this.submitted = false;
    this.currBearPrompt = new BearPrompt();
  }

}
