import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import BearPrompt from 'src/app/models/BearPrompt';
import { PromptsService } from 'src/app/services/prompts.service';

@Component({
  selector: 'app-details-prompt',
  templateUrl: './details-prompt.component.html',
  styleUrls: ['./details-prompt.component.css']
})
export class DetailsPromptComponent implements OnInit {

  @Input() prompt: BearPrompt | undefined;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentPrompt: BearPrompt | undefined;
  message = '';
  
  constructor(private promptService: PromptsService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentPrompt = { ...this.prompt};
  }

  /**
   * update fields
   */

}
