import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPromptsComponent } from './list-prompts.component';

describe('ListPromptsComponent', () => {
  let component: ListPromptsComponent;
  let fixture: ComponentFixture<ListPromptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPromptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPromptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
