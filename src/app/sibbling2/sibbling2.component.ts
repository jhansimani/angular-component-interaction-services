import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-sibbling2',
  templateUrl: './sibbling2.component.html',
})
export class Sibbling2Component implements OnInit {
  constructor(private service: CustomService) {}
  cities: any;
  ngOnInit() {
    this.service.state.subscribe((data) => {
      this.cities = data.cities;
    });
  }
  onChange(event) {
    console.log(event.target.value);
  }
}
