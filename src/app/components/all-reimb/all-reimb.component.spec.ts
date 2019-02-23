import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReimbComponent } from './all-reimb.component';

describe('AllReimbComponent', () => {
  let component: AllReimbComponent;
  let fixture: ComponentFixture<AllReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
