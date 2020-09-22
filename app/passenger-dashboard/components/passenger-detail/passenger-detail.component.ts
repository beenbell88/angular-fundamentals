import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name
          >
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{
          detail.checkedInDate
            ? (detail.checkedInDate | date: "yMMMMd" | uppercase)
            : "Not checked in"
        }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit'}}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
      <button (click)="goToPassenger()">
        view
      </button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input() detail: Passenger;
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() remove: EventEmitter<Passenger> = new EventEmitter();
  @Output() view: EventEmitter<Passenger> = new EventEmitter();
  editing: boolean = false;

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
    console.log('ngOnchanges')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  onNameChange(value: string) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.onEdit();
    }
    this.editing = !this.editing;
  }

  onEdit() {
    this.edit.emit(this.detail);
  }

  onRemove() {
    this.remove.emit(this.detail);
  }

  goToPassenger() {
    this.view.emit(this.detail);
  }
}
