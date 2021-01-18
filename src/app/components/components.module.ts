import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers/workers.component';
import { FlightsByWorkerComponent } from './flights-by-worker/flights-by-worker.component';
import { FlightInfoComponent } from './flight-info/flight-info.component';
import { WorkersService } from '../global-services/workers.service';
import { FlightsService } from '../global-services/flights.service';
import { MaterialModule } from '../material-module/material.module';
import { HoursMinitesPipe } from './pipes/hours-minites.pipe';



@NgModule({
  declarations: [
    WorkersComponent,
    FlightsByWorkerComponent,
    FlightInfoComponent,

    HoursMinitesPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    WorkersComponent,
    FlightsByWorkerComponent,
    FlightInfoComponent
  ],
  providers: [
    WorkersService,
    FlightsService
  ]
})
export class ComponentsModule { }
