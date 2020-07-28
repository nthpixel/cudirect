import { Component, OnInit, Input } from '@angular/core';
import { ForecastDayModel } from '../../models/forecastModel';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() forecastDayModel: ForecastDayModel;

  constructor() { }

  ngOnInit(): void {
  }

}
