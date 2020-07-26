import { Component, OnInit, Input } from '@angular/core';
import { ForecastModel } from '../../models/forecastModel';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input forecastModel: ForecastModel;

  constructor() { }

  ngOnInit(): void {
  }

}
