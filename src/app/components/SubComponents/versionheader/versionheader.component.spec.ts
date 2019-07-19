import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionheaderComponent } from './versionheader.component';

describe('VersionheaderComponent', () => {
  let component: VersionheaderComponent;
  let fixture: ComponentFixture<VersionheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
