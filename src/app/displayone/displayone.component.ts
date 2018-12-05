import { Component, OnInit } from '@angular/core';
import {WeatherService}  from '../weather.service'; // importing "weatherService" service
import {CurrentWeather} from '../current-weather'; // importing current weather class
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-displayone',
  templateUrl: './displayone.component.html',
  styleUrls: ['./displayone.component.css']
})
export class DisplayoneComponent implements OnInit {
   WeatherNow:CurrentWeather; //instance from the current weather class 
    location
    data 
    hideproperity:Boolean= true;
    
  constructor(private ws:WeatherService) { } // here "WS" is an instance of weatherService
  
  // "onSubmit"function executed when submit the form to get the desired city name 

  onSubmit(formOutput:NgForm){ // putting output values of the form into "formOutput"
    console.log(formOutput);
    this.ws.CityAPI(formOutput.value.cityName).subscribe((anothercity) =>{console.log(anothercity); //saving the Weather data retrieved from HTTP request in "anothercity" variable
      this.WeatherNow= new CurrentWeather (
        anothercity.data.request[0].query,
      anothercity.data.weather[0].date,
      anothercity.data.current_condition[0].weatherDesc[0].value,
      anothercity.data.weather[0].mintempC,
      anothercity.data.weather[0].maxtempC,
      anothercity.data.current_condition[0].humidity);
      this.hideproperity=false; // to hide the display one when moving to display two
      
      this.ws.sharingFunction(anothercity); // passing the data retrieved from the HTTP request to the service
    })
    
  }




   ngOnInit() {

    // detecting  geographical location 
     navigator.geolocation.getCurrentPosition((pos)=>{
     this.location = pos.coords;
     console.log(this.location);
     const lat = this.location.latitude;
     const lon  = this.location.longitude;

     this.WeatherNow = this.ws.dummyDataFunction(); // pushing dummy data to be displayed before browser renders 
    this.ws.WeatherAPI(lat,lon) // this function send observable and that means data won`t get to the component unless they subscribe
    .subscribe((dataNow) =>{console.log(dataNow);
      

    this.WeatherNow= new CurrentWeather (
      dataNow.data.request[0].query,
      dataNow.data.weather[0].date,
      dataNow.data.current_condition[0].weatherDesc[0].value,
      dataNow.data.weather[0].mintempC,
      dataNow.data.weather[0].maxtempC,
      dataNow.data.current_condition[0].humidity);
  
       }) 
    
      // when applying the following part of code will overwrite the date retrieved from
      // the recommended API website as it gives non accurate date by detecting the geographical location and sometimes not rendered on the app
    //getting data from another Weather API website

    /*
    this.ws.APIbackup(lat,lon).subscribe((backup) =>{console.log(backup);
    this.WeatherNow.cityName=backup.name;
    this.WeatherNow.weatherKind=backup.weather[0].main;
    this.WeatherNow.tempMin=backup.main.temp_max;
    this.WeatherNow.tempMax=backup.main.temp_min;
    this.WeatherNow.humidity=backup.main.humidity;
        }) 
         
      */
     })

   
  }
}

