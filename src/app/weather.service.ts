import { Injectable } from '@angular/core';
import {CurrentWeather} from './current-weather'; // importing  currentWeather class
import {Http ,Response } from '@angular/http';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import {Observable, BehaviorSubject, Subject} from 'rxjs'
import { DisplayoneComponent } from './displayone/displayone.component';

/* Weather Service function is to 
   1) Get Request from webserver  through Methods "WeatherAPI,CityAPI,APIbackup"
   2) pushing dummy data through Method "dummyDataFunction"
   3) passing data between components through subject "sharingSubject"
*/



@Injectable({
  providedIn: 'root'
})

export class WeatherService { 

  constructor(private _http:Http ) { }
  public sharingSubject =new Subject<any>();
  current:CurrentWeather = new CurrentWeather('dummy city ','dummy date','dummy state','dummy ','dummy ','dummy ' )
// "Current" is an object instanciated from CurrentWeather class
  dummyDataFunction (){
   
    // the function named "dummyDataFunction" return the object "current"
    return this.current;
  }

  // WeatherAPI function to get weather API Data by geographical location
  WeatherAPI(lat:string ,lon:string){

  return this._http.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d9cbcffffddf4b66b8b124441180411&q=${lat} / ${lon}&format=json`).pipe(map((response:Response) => response.json()));}


//function to get another city weather
CityAPI(city:string){
  return this._http.get(`http://api.worldweatheronline.com/premium/v1/weather.ashx?key=d9cbcffffddf4b66b8b124441180411&q=${city}&format=json`).pipe(map((response:Response) => response.json()));}


  //another backup function for weather API to get the location using openweather map website
  APIbackup(lat:string ,lon:string){
    return this._http.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=73191d98859ee9d7f48e037348893c85`).pipe(map((response:Response) => response.json()));}
  
    
    


   sharingFunction(pass){
     this.sharingSubject.next(pass); // putting the data received from component one into a subject
   }

  }

  

  