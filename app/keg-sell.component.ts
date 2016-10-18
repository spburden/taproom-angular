import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-sell',
  template: `
    <button *ngIf="keg.pints" (click)="sellPint()">Sell 1 Pint</button>
  `
})

export class KegSellComponent {
  @Input() keg: Keg;
  sellPint() {
    this.keg.pints--;
  }
}
