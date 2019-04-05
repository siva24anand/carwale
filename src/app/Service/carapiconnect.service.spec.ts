import { TestBed } from '@angular/core/testing';

import { CarapiconnectService } from './carapiconnect.service';

describe('CarapiconnectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarapiconnectService = TestBed.get(CarapiconnectService);
    expect(service).toBeTruthy();
  });
});
