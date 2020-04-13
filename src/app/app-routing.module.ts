import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
=======
=======
import {ConfigAppComponent} from './config-app/config-app.component';
import {MapBusinessProcessApplicationComponent} from './map-business-process-application/map-business-process-application.component';
import { PaceLayerChartComponent } from './pace-layer-chart/pace-layer-chart.component';
import {TimeplotComponent} from './timeplot/timeplot.component';
import { NgxSpinnerModule } from "ngx-spinner";

const routes: Routes = [
    { path: 'InventoryApplications', component: ConfigAppComponent},
    {path: 'mapbusinessprocessapplication', component: MapBusinessProcessApplicationComponent},
    {path:'paceLayerchart',component:PaceLayerChartComponent},
    {path:'timeplot',component:TimeplotComponent}
    
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes), NgxSpinnerModule],
    
    exports: [RouterModule]

  })

  export class AppRoutingModule { }
  export const routingComponents = [ConfigAppComponent,MapBusinessProcessApplicationComponent,PaceLayerChartComponent,TimeplotComponent]
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
