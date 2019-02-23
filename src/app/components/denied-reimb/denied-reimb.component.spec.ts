import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeniedReimbComponent } from './denied-reimb.component';

describe('DeniedReimbComponent', () => {
  let component: DeniedReimbComponent;
  let fixture: ComponentFixture<DeniedReimbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeniedReimbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeniedReimbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
