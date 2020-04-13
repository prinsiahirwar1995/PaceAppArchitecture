import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
