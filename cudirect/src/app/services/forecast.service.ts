import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ForecastModel, ForecastDayModel, ForecastHourModel } from '../models/forecastModel';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=def93063f68846ee5ced8bd99611bcee";
  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
    console.log("getForecast");
    let forecastDays: ForecastDayModel[];
    // this.getForeCastData().subscribe(d => {
    //   console.log(d);
    //   return this.mapApiDataToForecastDayModels(d)
    // });

    return this.getForeCastData();
  }

  private mapApiDataToForecastDayModels(data: any): ForecastModel
  {
    let forecastModel: ForecastModel = {
      city: data["city"]["name"],
      forecastDays: []
    };
    let forecastDays: ForecastDayModel[] = [];
    forecastModel.forecastDays = forecastDays;

    data["list"].map(l => {
      let dt: Date = new Date(l.dt_txt);
      //console.log(dt.toDateString());
      let forecastDay: ForecastDayModel = forecastDays.find(fd => fd.date.toDateString() === dt.toDateString());
      if (!forecastDay) {
        forecastDay = {
          forecastHours: [],
          date: dt
        };

        forecastDays.push(forecastDay);
      }
      else
      {
        let forecastHour: ForecastHourModel = {
          date: dt,
          temp: l["main"]["temp"],
          humidity: l["main"]["humidity"]
        };

        forecastDay.forecastHours.push(forecastHour);
      }
    });

    console.log(forecastModel);
    return forecastModel;
  }

  private getForeCastData(): Observable<any> {
    //return this.http.get(this.apiUrl).pipe(map(this.extractData));
    return this.http.get("./assets/data.json").pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
