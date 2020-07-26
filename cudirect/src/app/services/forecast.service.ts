import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ForecastModel } from '../models/forecastModel';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=def93063f68846ee5ced8bd99611bcee";
  constructor(private http: HttpClient) { }

  getForecast(): Observable<any> {
    console.log("getForecast");
    //let d: any;
    let result = this.http.get(this.apiUrl).pipe(map(this.extractData));
    console.log(result);
    return result;
    //console.log(d);
    
    // let jsonObj: any = JSON.parse(response);
    // console.log(jsonObj);

    //return [
      //{date: new Date(), temp: 90, humidity: 100}
      
    //];
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
