import { Component, OnInit, Input } from '@angular/core';
import { ForecastModel, ForecastDayModel, ForecastHourModel } from '../../models/forecastModel';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() forecastHour: ForecastHourModel;

  constructor() { }

  ngOnInit(): void {
  }

}
