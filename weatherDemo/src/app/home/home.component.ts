import { Component, OnInit } from '@angular/core';
import { BackendApiService } from 'src/services/backend-api.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities:any = [];
  constructor(private _service : BackendApiService, private http: HttpClient  ) { }

  ngOnInit(): void {
      let londonCityApi = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517');
      let BirminghamCityApi = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Birmingham,uk&appid=3d8b309701a13f65b660fa2c64cdc517');
      let ManchesterCityApi = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&appid=3d8b309701a13f65b660fa2c64cdc517');
      let EdinburghCityApi = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Edinburgh,uk&appid=3d8b309701a13f65b660fa2c64cdc517');
      let CardiffCityApi = this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Cardiff,uk&appid=3d8b309701a13f65b660fa2c64cdc517');
      forkJoin([londonCityApi, BirminghamCityApi,ManchesterCityApi,EdinburghCityApi,CardiffCityApi]).subscribe(results => {
          if(results.length > 0) {
             results.forEach(function(item){
                item['value'] = item['name'];
                item['sunrise'] = item['sys']['sunrise']
                item['sunset'] = item['sys']['sunset']
                item['temp'] = item['main']['temp']
             })
          }
          this.cities = results;
      });
  }

}
