import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPromptComponent } from './details-prompt.component';

describe('DetailsPromptComponent', () => {
  let component: DetailsPromptComponent;
  let fixture: ComponentFixture<DetailsPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
