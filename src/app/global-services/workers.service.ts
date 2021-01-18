import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { }

  public getWorkersData$(jsonUrl: string): Observable<Array<IWorkers>> {
    const workersData$ = new Observable((observer: Observer<Array<IWorkers>>) => {
      this.http.get(jsonUrl)
         .subscribe((data: IWorkers[]) => {
           observer.next(data);
      });
    });
    return workersData$;
  }

}


export interface IWorkers {
  id: number;
  name: string;
  selected?: boolean;
}
