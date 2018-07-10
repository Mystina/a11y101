import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDMComponent } from './checklist-DM.component';

describe('ChecklistDMComponent', () => {
  let component: ChecklistDMComponent;
  let fixture: ComponentFixture<ChecklistDMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistDMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
