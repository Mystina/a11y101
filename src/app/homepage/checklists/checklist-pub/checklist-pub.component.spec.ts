import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistPubComponent } from './checklist-pub.component';

describe('ChecklistPubComponent', () => {
  let component: ChecklistPubComponent;
  let fixture: ComponentFixture<ChecklistPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
