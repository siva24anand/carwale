import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhlargeComponent } from './adhlarge.component';

describe('AdhlargeComponent', () => {
  let component: AdhlargeComponent;
  let fixture: ComponentFixture<AdhlargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhlargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhlargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
