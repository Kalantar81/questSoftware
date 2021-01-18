import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FlightsService, IFlights } from 'src/app/global-services/flights.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flights-by-worker',
  templateUrl: './flights-by-worker.component.html',
  styleUrls: ['./flights-by-worker.component.less']
})
export class FlightsByWorkerComponent implements OnInit, OnDestroy {

  private flightsDataSubscription: Subscription;

  private flightSelectedIndex: number;

  public columnNames: Array<string> = ['num', 'from', 'from_date', 'to', 'to_date'];
  public flightsData: IFlights[];



  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
    this.flightsDataSubscription = this.flightsService.flightsByWorker$
      .subscribe((data: Array<IFlights>) => {
        this.flightsData = data.map((value, index) => {
          return {
            num: value.num,
            from: value.from,
            to: value.to,
            from_date: value.from_date,
            to_date: value.to_date,
            plane: value.plane,
            duration: value.duration,
            from_gate: value.from_gate,
            to_gate: value.to_gate,
            selected: false
          };
        });
        if (this.flightsData.length > 0) {
            this.flightsData[0].selected = true;
            this.flightSelectedIndex = 0;
          }
    });
  }

  public updateFlightInfo(flight: IFlights, index: number): void {
    this.flightsData[this.flightSelectedIndex].selected = false;
    this.flightsData[index].selected = true;
    this.flightSelectedIndex = index;
    this.flightsService.flightInfo$.next({
      plane: flight.plane,
      duration: flight.duration,
      from_gate: flight.from_gate,
      to_gate: flight.to_gate
    });
  }

  ngOnDestroy() {
    this.flightsDataSubscription.unsubscribe();
  }

}
