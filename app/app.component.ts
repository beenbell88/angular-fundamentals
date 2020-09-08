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
      [value]="name"
      (input)="handleInput($event)"
      (blur)="handleBlur($event)">
    <div>{{name}}</div>
    </div>
  `
})
export class AppComponent {
  name: string = "Todd";

  handleClick(evt: any) {
    this.name = "";    
  }

  handleInput(evt: any) {
    this.name = evt.target.value;    
  }

  handleBlur(evt: any) {
    this.name = evt.target.value;    
  }
}
