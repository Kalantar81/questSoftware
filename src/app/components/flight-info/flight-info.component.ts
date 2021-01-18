import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FlightsService, IFlightInfo } from 'src/app/global-services/flights.service';

@Component({
  selector: 'app-flight-info',
  templateUrl: './flight-info.component.html',
  styleUrls: ['./flight-info.component.less']
})
export class FlightInfoComponent implements OnInit, OnDestroy {

  private flightInfoSubscription: Subscription;

  public flightInfo: IFlightInfo;

  constructor(private flightsService: FlightsService) { }

  ngOnInit() {
        this.flightInfoSubscription = this.flightsService.flightInfo$
        .subscribe((flightInfo) => this.flightInfo = flightInfo);
      }

  ngOnDestroy() {
    this.flightInfoSubscription.unsubscribe();
  }

}

