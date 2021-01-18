import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  public flightsByWorker$ = new BehaviorSubject<IFlights[]>([]);

  public flightInfo$ = new BehaviorSubject<IFlightInfo>(null);

  constructor(private http: HttpClient) { }

    public getFlightsData$(jsonUrl: string): Observable<Array<IFlights>> {
      const flightsData$ = new Observable((observer: Observer<Array<IFlights>>) => {
        this.http.get(jsonUrl)
          .subscribe((data: IFlights[]) => {
            observer.next(data);
        });
      });
      return flightsData$;
    }

  }

export interface IFlights {
  num: string;
  from: string;
  to: string;
  /** dd//mm/yyyy */
  from_date: string;
  /** dd//mm/yyyy */
  to_date: string;
  plane: string;
  duration: number;
  from_gate: number;
  to_gate: number;
  selected?: boolean;
}

export interface IFlightInfo {
  plane: string;
  duration: number;
  from_gate: number;
  to_gate: number;
}
