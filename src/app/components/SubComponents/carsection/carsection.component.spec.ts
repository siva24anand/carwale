import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsectionComponent } from './carsection.component';

describe('CarsectionComponent', () => {
  let component: CarsectionComponent;
  let fixture: ComponentFixture<CarsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
