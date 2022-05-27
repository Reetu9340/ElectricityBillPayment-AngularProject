import { TestBed } from '@angular/core/testing';

import { ElectricitybillService } from './electricitybill.service';

describe('ElectricitybillService', () => {
  let service: ElectricitybillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricitybillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
