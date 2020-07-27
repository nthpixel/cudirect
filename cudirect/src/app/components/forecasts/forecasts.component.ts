import { Component, OnInit } from '@angular/core';
import { ForecastModel } from '../../models/forecastModel';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  public forecastModels: ForecastModel[];

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    let d: any;
    this.forecastService.getForecast().subscribe(data => this.foo(data));
  }

  foo(data:any)
  {
    console.log(data);
    console.log(data["list"]);
  }

}
