import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvsmallComponent } from './advsmall.component';

describe('AdvsmallComponent', () => {
  let component: AdvsmallComponent;
  let fixture: ComponentFixture<AdvsmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvsmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
