import { Injectable } from '@angular/core';
import { Finance } from 'src/services/finance';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private finances: BehaviorSubject<Array<Finance>> = new BehaviorSubject([]);

  constructor() {
    this.finances.next(this.createData(25));
    console.log(this.finances.value);
  }

  private createData(count: number): Array<Finance> {
    return Array(count)
      .fill(0)
      .map(() => Finance.crateFromFaker())
    ;
  }

  public getFinancesData(): Observable<Array<Finance>> {
    return this.finances.asObservable();
  }
}
