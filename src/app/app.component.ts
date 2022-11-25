import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { filter, map, of, switchMap } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CustomService } from './custom.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Angular ' + VERSION.major;
  transformedNumArray: any = [];
  ofObse = of(1, 2, 3);
  ofObseSubscription: any;
  constructor(private service: CustomService) {}
  ngOnInit() {
    this.service.numArray
      .pipe(
        map((item) => {
          return item.map((item) => {
            return item * 2;
          });
        })
      )
      .subscribe((data) => {
        this.transformedNumArray = data;
        console.log('hhh', this.transformedNumArray);
      });
    // this.ofObseSubscription = this.ofObse
    //   .pipe(
    //     switchMap((val) => {
    //       console.log('Source value ' + val);
    //       console.log('starting new observable');
    //       return of('a', 'b', 'c');
    //     })
    //   )
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
    this.ofObseSubscription = this.ofObse
      .pipe(
        
        mergeMap((val) => {
          console.log('Source value ' + val);
          console.log('starting new observable');
          return of('a', 'b', 'c');
        })
      )
      .subscribe((val) => {
        console.log(val);
      });
  }

  ngOnDestroy() {}
}
