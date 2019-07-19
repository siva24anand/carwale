import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmenuComponent } from './carmenu.component';

describe('CarmenuComponent', () => {
  let component: CarmenuComponent;
  let fixture: ComponentFixture<CarmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
