import { Component, OnInit } from '@angular/core';
import { ForecastDayModel } from '../../models/forecastModel';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  public forecastDayModels: ForecastDayModel[];

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    //let d: any;
    //this.forecastService.getForecast().subscribe(data => this.foo(data));
    let d = this.forecastService.getForecast();
    // console.log("got forecast");
    console.log(d);
    // console.log("logged forecast");
  }

  foo(data:any)
  {
    console.log(data);
    console.log(data["list"]);
  }

}
