import { Component, OnInit, VERSION } from '@angular/core';
import { filter, map } from 'rxjs';
import { CustomService } from './custom.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  transformedNumArray: any = [];
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
  }
}
