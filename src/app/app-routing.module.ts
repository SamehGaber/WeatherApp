import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayoneComponent } from './displayone/displayone.component';
import { DisplaytwoComponent } from './displaytwo/displaytwo.component';
import { AppComponent } from './app.component';

const routes:Routes=[
  {path:'main', component: DisplaytwoComponent},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
