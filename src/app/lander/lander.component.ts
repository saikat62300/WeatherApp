import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BackendapiService } from "../backendapi.service";
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-lander",
  templateUrl: "./lander.component.html",
  styleUrls: ["./lander.component.css"]
})
export class LanderComponent implements OnInit {
  weatherData: any;
  IstanbulWeatherData: any;
  BerlinWeatherData: any;
  LondonWeatherData: any;
  HelsinkiWeatherData: any;
  DublinWeatherData: any;
  VancouverWeatherData: any;
  isVisible:any = true;
  // I_weather_state_abbr: string;
  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendapiService: BackendapiService
  ) {}
  onSubmit(f: NgForm) {
    console.log(this.model.location);
    this.router.navigate(["search/"+this.model.location]);
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  ngOnInit() {
    this.backendapiService.getWeather("2344116").subscribe(res => {
      this.isVisible = false;
      this.IstanbulWeatherData = res;
      // this.I_weather_state_abbr = res.consolidated_weather[0].weather_state_abbr;
      // console.log(res.consolidated_weather[0].weather_state_abbr);
    });

    this.backendapiService.getWeather("638242").subscribe(res => {
      this.BerlinWeatherData = res;
    });

    this.backendapiService.getWeather("44418").subscribe(res => {
      this.LondonWeatherData = res;
    });

    this.backendapiService.getWeather("565346").subscribe(res => {
      this.HelsinkiWeatherData = res;
    });

    this.backendapiService.getWeather("560743").subscribe(res => {
      this.DublinWeatherData = res;
    });

    this.backendapiService.getWeather("9807").subscribe(res => {
      this.VancouverWeatherData = res;
    });
  }
}
