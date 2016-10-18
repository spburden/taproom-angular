import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h3>Create a new Keg</h3>
    <div>
      <label>Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Alcohol Content:</label>
      <input #newABV>
      <button (click)="
        addClicked(newBrand.value, newABV.value);
        newBrand.value='';
        newABV.value='';
        ">Add</button>
    </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(brand: string, abv: number) {
    var newKegToAdd: Keg = new Keg(brand, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
