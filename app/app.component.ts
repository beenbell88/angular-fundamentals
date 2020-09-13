import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: number | null;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'Stephen',
      checkedIn: true,
      checkedInDate: 1490742000000
    },
    {
      id: 2,
      fullname: 'Rose',
      checkedIn: false,
      checkedInDate: null
    },
    {
      id: 3,
      fullname: 'James',
      checkedIn: true,
      checkedInDate: 1491606000000
    }, {
      id: 4,
      fullname: 'Louise',
      checkedIn: true,
      checkedInDate: 1488412800000
    },{
      id: 5,
      fullname: 'Tina',
      checkedIn: false,
      checkedInDate: null
    }
  ];
}
