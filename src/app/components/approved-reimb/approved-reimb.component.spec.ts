import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedReimbComponent } from './approved-reimb.component';

describe('ApprovedReimbComponent', () => {
  let component: ApprovedReimbComponent;
  let fixture: ComponentFixture<ApprovedReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
