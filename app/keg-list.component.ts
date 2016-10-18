import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KegSellComponent } from './keg-sell.component';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Available Kegs: </h2>
    <div *ngFor="let keg of childKegList">
      <h4>{{ keg.brand }}</h4>
      <p>ABV: {{ keg.abv }}%</p>
      <p>Number of pints left: {{ keg.pints }}</p>
      <keg-sell [keg] ="keg"></keg-sell>
      <hr>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
}
