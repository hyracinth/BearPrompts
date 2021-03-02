import { Component, OnInit } from '@angular/core';
import BearPrompt from 'src/app/models/BearPrompt';
import { PromptsService } from 'src/app/services/prompts/prompts.service';

@Component({
  selector: 'app-add-prompt',
  templateUrl: './add-prompt.component.html',
  styleUrls: ['./add-prompt.component.css']
})
export class AddPromptComponent implements OnInit {

  currBearPrompt: BearPrompt = new BearPrompt();
  submitted: Boolean = false;
  errorMsg: string = '';

  constructor(private promptsService: PromptsService) { }

  ngOnInit(): void {
  }

  savePrompt(): void {
    if(this.currBearPrompt.isValid()) {
      this.promptsService.create(this.currBearPrompt).then( (response) => {
        console.log(response);
        console.log('Created new prompt successfully.');
        this.submitted = true;
        this.errorMsg = '';
      })
    }
    else {
      this.errorMsg = 'This is not a valid prompt! Missing a field or two!';
    }
  }

  resetPrompt(): void {
    this.submitted = false;
    this.currBearPrompt = new BearPrompt();
  }

}
