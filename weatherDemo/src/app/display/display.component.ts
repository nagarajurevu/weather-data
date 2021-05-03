import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendApiService } from 'src/services/backend-api.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
 
  displayData;
  dispalyTemp;
  constructor(private _service : BackendApiService,private _Activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    var cityName = this._Activatedroute.snapshot.params['city'];
   
    this._service.getCityDetails(cityName).subscribe( data => {
      this.displayData = data;
      this.dispalyTemp = data['list'].splice(0,5);
      this.dispalyTemp.forEach(element => {
        element['temp'] = element['main']['temp'];
        element['sea_level'] = element['main']['sea_level'];
      });
      console.log(this.dispalyTemp);
    });
  }  
}