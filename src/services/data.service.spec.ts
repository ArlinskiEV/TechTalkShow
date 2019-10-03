import { TestBed, async } from '@angular/core/testing';

import { Finance } from 'src/services/finance';

import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('should return data', async(() => {
    const service: DataService = TestBed.get(DataService);
    service
      .getFinancesData()
      .subscribe(
        (data: Array<Finance>) => {
          expect(data.length).toBe(25);
        }
      )
    ;
  }));


});
