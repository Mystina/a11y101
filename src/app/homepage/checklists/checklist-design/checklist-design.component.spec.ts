import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDesignComponent } from './checklist-design.component';

describe('ChecklistDesignComponent', () => {
  let component: ChecklistDesignComponent;
  let fixture: ComponentFixture<ChecklistDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
