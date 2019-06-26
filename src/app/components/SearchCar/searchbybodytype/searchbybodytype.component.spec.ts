import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbybodytypeComponent } from './searchbybodytype.component';

describe('SearchbybodytypeComponent', () => {
  let component: SearchbybodytypeComponent;
  let fixture: ComponentFixture<SearchbybodytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbybodytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbybodytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
