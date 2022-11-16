import { Component } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-sibbling1',
  templateUrl: './sibbling1.component.html',
})
export class Sibbling1Component {
  constructor(private service: CustomService) {}
  states = [
    {
      name: 'Andhra Pradesh',
      cities: ['Hyderabad', 'Vizag', 'Vizianagaram'],
    },
    {
      name: 'karnataka',
      cities: ['Mysore', 'Bangalore', 'Bellary'],
    },
    {
      name: 'Tamilnadu',
      cities: ['Chennai', 'Madurai', 'Thanjavur'],
    },
  ];
  onChange(event) {
    const index = this.states.findIndex(
      (state) => state.name === event.target.value
    );
    this.service.state.next(this.states[index]);
  }
}
