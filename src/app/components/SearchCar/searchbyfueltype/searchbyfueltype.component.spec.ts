import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyfueltypeComponent } from './searchbyfueltype.component';

describe('SearchbyfueltypeComponent', () => {
  let component: SearchbyfueltypeComponent;
  let fixture: ComponentFixture<SearchbyfueltypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbyfueltypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyfueltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
