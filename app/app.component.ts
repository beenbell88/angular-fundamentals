import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
    <button (click)="handleClick($event)">
    Change Name
    </button>
      <input
      type="text"
      [(ngModel)]="name">
    <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "Todd";

  handleClick(evt: any) {
    this.name = "";    
  }
handleChange(value: string) {
  this.name = value;
}
}
