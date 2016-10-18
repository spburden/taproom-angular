import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KegSellComponent } from './keg-sell.component';
import { EditKegComponent } from './edit-keg.component';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <h2>Available Kegs: </h2>
    <div>
      <label>Display kegs with less than inputted amount</label>
      <input type="number" #kegVolume>
      <button (click)="filterByPints(kegVolume.value)">Filter</button>
    </div>
    <div *ngFor="let keg of childKegList | kegVolume:volumeToDisplay">
      <h4>{{ keg.brand }}</h4>
      <p>ABV: {{ keg.abv }}%</p>
      <p>Number of pints left: {{ keg.pints }}</p>
      <keg-sell [keg] = "keg"></keg-sell>
      <button (click)="showEditForm(keg)">Edit</button>
      <hr>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() showEditFormSender = new EventEmitter();
  public volumeToDisplay: number = 125;
  filterByPints(pints: number){
    this.volumeToDisplay = pints;
  }
  showEditForm(kegToEdit: Keg){
    this.showEditFormSender.emit(kegToEdit);
  }
}
