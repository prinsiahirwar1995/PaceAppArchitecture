import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigAppComponent } from './config-app/config-app.component';
import { ConfigTopAppComponent } from './config-top-app/config-top-app.component';
import { MenusComponent } from './menus/menus.component';
import { MapBusinessProcessApplicationComponent } from './map-business-process-application/map-business-process-application.component';
import {DropdownModule} from 'primeng/dropdown';
import { HighchartsChartModule } from 'highcharts-angular';


import {Observable} from 'rxjs';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
import { TimeplotComponent } from './timeplot/timeplot.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigTopAppComponent,
    MenusComponent,
    MapBusinessProcessApplicationComponent,routingComponents, PaceLayerChartComponent, TimeplotComponent  ],
  imports: [
    BrowserModule,
    DropdownModule,// dropdown support
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }


