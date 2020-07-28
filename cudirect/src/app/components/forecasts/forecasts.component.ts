import { Component, OnInit } from '@angular/core';
import { ForecastModel, ForecastDayModel, ForecastHourModel } from '../../models/forecastModel';
import { ForecastService } from '../../services/forecast.service';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  public forecastModel: ForecastModel;

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
    this.forecastService.getForecast().then(data => {
      this.forecastModel = data;
      var d = new Date();
      
    });
  }
}
