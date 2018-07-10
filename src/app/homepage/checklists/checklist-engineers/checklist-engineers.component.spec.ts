import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistEngineersComponent } from './checklist-engineers.component';

describe('ChecklistEngineersComponent', () => {
  let component: ChecklistEngineersComponent;
  let fixture: ComponentFixture<ChecklistEngineersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistEngineersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistEngineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
