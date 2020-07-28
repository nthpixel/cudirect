import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ForecastModel, ForecastDayModel, ForecastHourModel } from '../models/forecastModel';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  constructor(private http: HttpClient) { }

  getForecast(zip: string): Promise<ForecastModel> {
    return new Promise(resolve => {
      this.getForecastData(zip).subscribe(d => {
        resolve(this.mapApiDataToForecastModel(d));
      });
    });
  }

  private mapApiDataToForecastModel(data: any): ForecastModel {
    let forecastModel: ForecastModel;

    if (data["cod"] != "200") {
      // An error occurred getting data. Return model with only error message.
      forecastModel = {
        city: "",
        forecastDays: [],
        error: data["message"]
      };
    }
    else {
      // Data came back successfully. Map data to model.
      forecastModel = {
        city: data["city"]["name"],
        forecastDays: [],
        error: ""
      };
      let forecastDays: ForecastDayModel[] = [];
      forecastModel.forecastDays = forecastDays;

      data["list"].map(l => {
        let dt: Date = new Date(l.dt_txt);
        let forecastDay: ForecastDayModel = forecastDays.find(fd => fd.date.toDateString() === dt.toDateString());
        if (!forecastDay) {
          forecastDay = {
            forecastHours: [],
            date: dt
          };

          forecastDays.push(forecastDay);
        }

        let forecastHour: ForecastHourModel = {
          date: dt,
          main: l["weather"][0]["main"],
          description: l["weather"][0]["description"],
          temp: l["main"]["temp"],
          humidity: l["main"]["humidity"]
        };

        forecastDay.forecastHours.push(forecastHour);
      });
    }

    return forecastModel;
  }

  private getForecastData(zip: string): Observable<any> {
    let url = `${environment.apiBaseUrl}?units=imperial&zip=${zip}&APPID=${environment.apiKey}`;
    return this.http.get(url).pipe(catchError(this.handleError<any>("getForecastData", {}))).pipe(map(this.extractData));

    // Dummy data
    //return this.http.get("./assets/data.json").pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError<T>(func: string, result?: T)
  {
    return (error: any): Observable<T> => {

      /*
      Error logging will go here
      */

      // Return object so it can be mapped to model with error message
      result["cod"] = error.error["cod"];
      result["message"] = error.error["message"];

      return of(result as T);
    }
  }
}
