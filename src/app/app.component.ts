<<<<<<< HEAD
import { Component } from '@angular/core';
=======
<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd,Event } from '@angular/router'
import * as Highcharts from 'highcharts';
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
<<<<<<< HEAD
  title = 'ApplicationForPaceLayer';
=======
<<<<<<< HEAD
  title = 'PaceLayerApplication';
=======
  showLoadingIndicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerevent: Event) => {
      if (routerevent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerevent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    });
  }



>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
}
