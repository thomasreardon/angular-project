import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpAddReimbComponent } from './emp-add-reimb.component';

describe('EmpAddReimbComponent', () => {
  let component: EmpAddReimbComponent;
  let fixture: ComponentFixture<EmpAddReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpAddReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpAddReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
