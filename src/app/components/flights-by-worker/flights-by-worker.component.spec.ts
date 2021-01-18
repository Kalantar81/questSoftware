import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsByWorkerComponent } from './flights-by-worker.component';

describe('FlightsByWorkerComponent', () => {
  let component: FlightsByWorkerComponent;
  let fixture: ComponentFixture<FlightsByWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsByWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsByWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
