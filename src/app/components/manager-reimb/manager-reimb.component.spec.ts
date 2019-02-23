import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerReimbComponent } from './manager-reimb.component';

describe('ManagerReimbComponent', () => {
  let component: ManagerReimbComponent;
  let fixture: ComponentFixture<ManagerReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
