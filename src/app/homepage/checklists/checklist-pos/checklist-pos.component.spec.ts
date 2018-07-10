import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistPOComponent } from './checklist-pos.component';

describe('ChecklistDesignComponent', () => {
  let component: ChecklistPOComponent;
  let fixture: ComponentFixture<ChecklistPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
