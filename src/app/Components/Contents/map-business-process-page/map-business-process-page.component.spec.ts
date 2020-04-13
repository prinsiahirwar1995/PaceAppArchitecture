import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBusinessProcessPageComponent } from './map-business-process-page.component';

describe('MapBusinessProcessPageComponent', () => {
  let component: MapBusinessProcessPageComponent;
  let fixture: ComponentFixture<MapBusinessProcessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBusinessProcessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBusinessProcessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
