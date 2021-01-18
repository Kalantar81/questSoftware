import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-view',
  templateUrl: './body-view.component.html',
  styleUrls: ['./body-view.component.less']
})
export class BodyViewComponent implements OnInit {
  public screenHeight: number;
  public screenWidth: number;

  @HostListener('window:resize', ['$event'])
    onResize(event?) {
       this.screenHeight = window.innerHeight - 18;
       this.screenWidth = window.innerWidth  - 15;
    }



  constructor() {
    this.onResize();
  }

  ngOnInit() {
  }

}
