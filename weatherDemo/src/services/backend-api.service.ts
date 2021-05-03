import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  _url: string;
  constructor(private _http: HttpClient) { }

  getCityDetails(item){
    this._url = "http://api.openweathermap.org/data/2.5/forecast?q=" +item+ ",uk&appid=3d8b309701a13f65b660fa2c64cdc517";
    return this._http.get(this._url);
  }

}

