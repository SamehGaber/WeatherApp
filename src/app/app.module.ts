import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayoneComponent } from './displayone/displayone.component';
import { DisplaytwoComponent } from './displaytwo/displaytwo.component';
import {WeatherService}  from './weather.service';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayoneComponent,
    DisplaytwoComponent,
    
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
