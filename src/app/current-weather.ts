import { Url } from "url";
import { Http } from "@angular/http";

//Creating a Class its constructor will hold the retrieved weather values
export class CurrentWeather {

    constructor(
        public cityName:string,
        public Date:string,
        public weatherKind:string,
        public tempMin:string,
        public tempMax:string,
        public humidity:string,
    ){}
}
