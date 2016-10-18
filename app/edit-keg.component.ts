import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template:`
    <div *ngIf="childSelectedKeg">
      <h1>Edit Keg</h1>
      <div>
        <label>Edit Keg Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand">
      </div>
      <div>
        <label>Edit Keg ABV:</label>
        <input [(ngModel)]="childSelectedKeg.abv">
        <button (click)="finishedEditing()">Done Editing</button>
      </div>
    </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output () finishedEditingSender = new EventEmitter();
  finishedEditing() {
    this.finishedEditingSender.emit();
  }
}
