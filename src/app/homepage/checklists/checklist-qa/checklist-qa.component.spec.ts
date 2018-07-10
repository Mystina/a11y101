import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistQAComponent } from './checklist-qa.component';

describe('ChecklistDesignComponent', () => {
  let component: ChecklistQAComponent;
  let fixture: ComponentFixture<ChecklistQAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistQAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistQAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
