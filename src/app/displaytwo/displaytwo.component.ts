import { Component, OnInit } from '@angular/core';
import {WeatherService}  from '../weather.service'; // importing "weatherService" service
import {NgForm} from '@angular/forms';
import {CurrentWeather} from '../current-weather'; // importing current weather class

import { DisplayoneComponent } from '../displayone/displayone.component';
@Component({
  selector: 'app-displaytwo',
  templateUrl: './displaytwo.component.html',
  styleUrls: ['./displaytwo.component.css']
})
export class DisplaytwoComponent implements OnInit {
  cityWeather:CurrentWeather;
  //creating objects to hold the forecasting values
  cityWeatherDay2:CurrentWeather;
  cityWeatherDay3:CurrentWeather;
  cityWeatherDay4:CurrentWeather;
  cityWeatherDay5:CurrentWeather; 

  constructor(private ws:WeatherService) { } // we are refering to the weatherService with Ws
 
  ngOnInit() {
  this.ws.sharingSubject.subscribe( datapassed => {console.log(datapassed); // subscribing to fetch the data from subject in the service

  this.cityWeather= new CurrentWeather(
    datapassed.data.request[0].query,
    datapassed.data.weather[0].date,
    datapassed.data.current_condition[0].weatherDesc[0].value,
    datapassed.data.weather[0].mintempC,
    datapassed.data.weather[0].maxtempC,
    datapassed.data.current_condition[0].humidity);
    
// to get the data of the following four days 
    this.cityWeatherDay2= new CurrentWeather(
      datapassed.data.request[0].query,
      datapassed.data.weather[1].date,
      datapassed.data.current_condition[0].weatherDesc[0].value,
      datapassed.data.weather[1].mintempC,
      datapassed.data.weather[1].maxtempC,
      datapassed.data.current_condition[0].humidity);

    this.cityWeatherDay3= new CurrentWeather(
      datapassed.data.request[0].query,
      datapassed.data.weather[2].date,
      datapassed.data.current_condition[0].weatherDesc[0].value,
      datapassed.data.weather[2].mintempC,
      datapassed.data.weather[2].maxtempC,
      datapassed.data.current_condition[0].humidity);

    this.cityWeatherDay4= new CurrentWeather(
      datapassed.data.request[0].query,
      datapassed.data.weather[3].date,
      datapassed.data.current_condition[0].weatherDesc[0].value,
      datapassed.data.weather[3].mintempC,
      datapassed.data.weather[3].maxtempC,
      datapassed.data.current_condition[0].humidity);

    this.cityWeatherDay5= new CurrentWeather(
      datapassed.data.request[0].query,
      datapassed.data.weather[4].date,
      datapassed.data.current_condition[0].weatherDesc[0].value,
      datapassed.data.weather[4].mintempC,
      datapassed.data.weather[4].maxtempC,
      datapassed.data.current_condition[0].humidity);




  })
  
}


}

