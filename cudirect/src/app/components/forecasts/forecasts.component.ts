import { Component, OnInit } from '@angular/core';
import { ForecastModel } from '../../models/forecastModel';
import { ForecastService } from '../../services/forecast.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { zip } from 'rxjs';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.component.html',
  styleUrls: ['./forecasts.component.css']
})
export class ForecastsComponent implements OnInit {
  forecastModel: ForecastModel;
  zip: string = "";

  constructor(private forecastService: ForecastService) { }

  ngOnInit(): void {
  }

  submitZip(): void {
    if(this.zip.length != 5 || Number(this.zip) == NaN) {
      alert("Please enter a valid 5 digit zip code.")
      return;
    }

    this.forecastService.getForecast(this.zip).then(data => {
      this.forecastModel = data;
    });
  }
}
