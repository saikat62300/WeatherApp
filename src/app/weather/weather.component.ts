import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BackendapiService } from "../backendapi.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  woeidData: any;
  woeid: string;
  wind_speed: any;
  gsDayNames: any; d:any; dayName:any;
  location: any;
  isVisible:any = true;
  noResult:any = false;
  
  constructor(
    private route: ActivatedRoute,
    private backendapiService: BackendapiService
  ) { }

  ngOnInit() {
    this.gsDayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    
    this.d = new Date();
    this.dayName = this.gsDayNames[this.d.getDay()];

    this.woeid = this.route.snapshot.paramMap.get('woeid');
    if(this.woeid){
      this.backendapiService.getWeather(this.woeid).subscribe(res => {
        this.isVisible = false;
        this.weatherData = res;

        if(!res){
          this.noResult = true;
        }
        this.wind_speed = this.weatherData.consolidated_weather[0].wind_speed.toFixed(2);  
      });
    }

    this.location = this.route.snapshot.paramMap.get('location');
    if(this.location){
      this.backendapiService.getWoeid(this.location).subscribe(res => {
        this.woeidData = res;
        if(res.length == 0){
          this.noResult = true;
          this.isVisible = false;
        }
        if(res.length > 0){          
          this.backendapiService.getWeather(this.woeidData[0].woeid).subscribe(resp => { 
            this.isVisible = false;        
            this.weatherData = resp;          
            this.wind_speed = this.weatherData.consolidated_weather[0].wind_speed.toFixed(2);  
          });
        }        
      });
    }

   
  }

}
