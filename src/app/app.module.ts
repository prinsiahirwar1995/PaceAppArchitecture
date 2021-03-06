import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MenuBarComponent } from './Components/Header/menu-bar/menu-bar.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { MapBusinessProcessPageComponent } from './Components/Contents/map-business-process-page/map-business-process-page.component';
import { TimePlotComponent } from './Components/Contents/time-plot/time-plot.component';
import { PaceLayerComponent } from './Components/Contents/pace-layer/pace-layer.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    MapBusinessProcessPageComponent,
    TimePlotComponent,
    PaceLayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
<<<<<<< HEAD

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './Layout/HomePage/Header/menu-bar/menu-bar.component';
import { FooterComponent } from './Layout/HomePage/Footer/footer/footer.component';
import { FooterBarComponent } from './Components/Footer/footer-bar/footer-bar.component';
=======
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigAppComponent } from './config-app/config-app.component';
import { ConfigTopAppComponent } from './config-top-app/config-top-app.component';
import { MenusComponent } from './menus/menus.component';
import { MapBusinessProcessApplicationComponent } from './map-business-process-application/map-business-process-application.component';
import {DropdownModule} from 'primeng/dropdown';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardService } from './dashboard.service';
import {Observable} from 'rxjs';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
import { TimeplotComponent } from './timeplot/timeplot.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuBarComponent,
    FooterComponent,
    FooterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    ConfigAppComponent,
    ConfigTopAppComponent,
    MenusComponent,
    MapBusinessProcessApplicationComponent,routingComponents, PaceLayerChartComponent, TimeplotComponent ],
  imports: [
    BrowserModule,
    DropdownModule,// dropdown support
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule,HttpModule
    //CommonModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }


>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
