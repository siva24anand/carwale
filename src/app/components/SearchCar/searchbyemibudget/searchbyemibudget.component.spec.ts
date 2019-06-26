import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyemibudgetComponent } from './searchbyemibudget.component';

describe('SearchbyemibudgetComponent', () => {
  let component: SearchbyemibudgetComponent;
  let fixture: ComponentFixture<SearchbyemibudgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyemibudgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyemibudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
