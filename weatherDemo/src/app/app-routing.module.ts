import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {HomeComponent } from './home/home.component'
import {DisplayComponent} from './display/display.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'city/:city', component: DisplayComponent }
  ])
],
})

export class AppRoutingModule { }
