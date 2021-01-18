
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { FlightsService, IFlights } from 'src/app/global-services/flights.service';
import { IWorkers, WorkersService } from 'src/app/global-services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.less']
})
export class WorkersComponent implements OnInit, OnDestroy {

  private workersDataSubscription: Subscription;
  private flightDataSubscription: Subscription;
  private flightDataMinuteIntervalSubscription: Subscription;

  private workerSelectedIndex = 0;
  private currentId: number;
  private timeInterval = interval(60000);

  public workersData: Array<IWorkers> = [];

  constructor(private workersService: WorkersService, private flightsService: FlightsService) { }

  ngOnInit() {
    this.workersDataSubscription = this.workersService.getWorkersData$('https://interview-mock.herokuapp.com/api/workers/')
    .subscribe(
      (data: Array<IWorkers>) => {
        this.workersData = data.map(value => {
          return {
            id: value.id,
            name: value.name,
            selected: false
          };
        });
        this.workersData[0].selected = true;
        this.currentId = this.workersData[0].id;
        this.showCurrentFlights(this.workersData[0].id, 0);
      }
    );

    // tslint:disable-next-line:max-line-length
    this.flightDataMinuteIntervalSubscription = this.timeInterval.subscribe(val => this.showCurrentFlights(this.currentId, this.workerSelectedIndex));

  }

  public showCurrentFlights(currentId: number, index: number): void {
    this.currentId = currentId;
    this.workersData[this.workerSelectedIndex].selected = false;
    this.workersData[index].selected = true;
    this.workerSelectedIndex = index;

    // tslint:disable-next-line:max-line-length
    this.flightDataSubscription = this.flightsService.getFlightsData$(`https://interview-mock.herokuapp.com/api/workers/${currentId}`)
    .subscribe(
      (data: Array<IFlights>) => {
        this.flightsService.flightsByWorker$.next(data);

        this.flightsService.flightInfo$.next({
          duration: this.flightsService.flightsByWorker$.getValue()[0].duration,
          from_gate: this.flightsService.flightsByWorker$.getValue()[0].from_gate,
          plane: this.flightsService.flightsByWorker$.getValue()[0].plane,
          to_gate: this.flightsService.flightsByWorker$.getValue()[0].to_gate
        });
      }
    );
  }

  ngOnDestroy() {
    this.workersDataSubscription.unsubscribe();
    this.flightDataSubscription.unsubscribe();
    this.flightDataMinuteIntervalSubscription.unsubscribe();
  }

}
