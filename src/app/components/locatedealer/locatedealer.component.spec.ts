import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatedealerComponent } from './locatedealer.component';

describe('LocatedealerComponent', () => {
  let component: LocatedealerComponent;
  let fixture: ComponentFixture<LocatedealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocatedealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocatedealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
