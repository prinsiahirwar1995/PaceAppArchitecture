import { Component, OnInit,Injectable, ElementRef,ViewChild  } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

import html2canvas  from 'html2canvas';

@Component({
  selector: 'app-pace-layer',
  templateUrl: './pace-layer.component.html',
  styleUrls: ['./pace-layer.component.css']
})


export class PaceLayerComponent implements OnInit {
  chartdata : any[];
  @ViewChild('screen') screen: ElementRef;

  @ViewChild('canvas') canvas: ElementRef;

  @ViewChild('downloadLink') downloadLink: ElementRef;

  @ViewChild('takingfordata') takingfordata:ElementRef;
  
  downloadImage(){

    html2canvas(document.body,{allowTaint : true}).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();

      this.downloadLink.nativeElement.download = 'PaceLayer-diagram.png';

      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');

      this.downloadLink.nativeElement.target = '_blank';

      this.downloadLink.nativeElement.click();

  

    });

  }

  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get("https://pacelayerapi.azurewebsites.net/masterApi/ApplLayerState")
.subscribe(
 portfoliodata => {
this.chartdata = portfoliodata[1];//fill data from api to mapdata
});
  }

}
