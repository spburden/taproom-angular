import { Component } from "@angular/core";
import { Keg } from './keg.model';

@Component({
  selector: "my-app",
  template: `
  <div class="container">
    <h1>Tap Room</h1>
    <keg-list
      [childKegList]="masterKegList"
      (showEditFormSender)="showEditForm($event)"
    ></keg-list>
    <new-keg
      (newKegSender)="addKeg($event)"
    ></new-keg>
    <edit-keg
      [childSelectedKeg]="selectedKeg"
      (doneClickedSender)="finishedEditing()"
      ></edit-keg>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
      new Keg("Budweiser", 5),
      new Keg("Guinness", 6),
      new Keg("Strongbow", 4),
      new Keg("Busch", 3)
  ];
  addKeg(newKegToAdd: Keg) {
    this.masterKegList.push(newKegToAdd);
  }
  selectedKeg: Keg = null;
  showEditForm(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing() {
    this.selectedKeg = null;
  }
}
