import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbybrandComponent } from './searchbybrand.component';

describe('SearchbybrandComponent', () => {
  let component: SearchbybrandComponent;
  let fixture: ComponentFixture<SearchbybrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbybrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbybrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
