import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

import 'rxjs/add/operator/switchMap'
@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
  <div>
    <passenger-form
    [detail]="passenger"
    (update)="onUpdatePassenger($event)">
    </passenger-form>
</div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(
    private passengerService: PassengerDashboardService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit(){
    this.route.params
    .switchMap((data: Params) => {
      return this.passengerService.getPassenger(data['id'])
    })
      .subscribe((data: Passenger) => this.passenger = data)
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
    .updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, data);
    })
  }
}
