import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarheaderComponent } from './carheader.component';

describe('CarheaderComponent', () => {
  let component: CarheaderComponent;
  let fixture: ComponentFixture<CarheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
