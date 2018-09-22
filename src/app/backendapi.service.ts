import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class BackendapiService {
  API_URL = "http://localhost/testassignmentangular/backend/weather.php";
  // API_URL = "https://www.metaweather.com/api/";
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': 'localhost:4200',
  //     'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
  //     // 'Access-Control-Allow-Headers':'Origin, Content-Type, X-Auth-Token',
  //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  //   })
  // };


  constructor(private httpClient: HttpClient) {}

  // getwoeid(location = ""): any {
  //   return this.httpClient.get(
  //     this.API_URL + "location/search/?query=" + location, this.httpOptions
  //   );
  // }

  getWoeid(location = ""): any {
    return this.httpClient.get(
      this.API_URL + "?command=search&keyword=" + location
    );
  }

  getWeather(woeid = ""): any {
    return this.httpClient.get(
      this.API_URL + "?command=location&woeid=" + woeid
    );
  }

}
