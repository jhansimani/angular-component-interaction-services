import { Injectable } from '@angular/core';

import { observable, Observable, of, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CustomService {
  observable = new Observable<any>();
  // onservable$ = this.observable.asObservable;
  state = new Subject<any>();
  state$ = this.state.asObservable;
  numArray = of([1, 2, 3, 4]); // creation array observable
}
