import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { DataService } from './services/data/data.service';
import { PlattegrondComponent } from './components/plattegrond/plattegrond.component';

import { InMemoryDataService } from './services/in-memory-data/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { RuimteComponent } from './components/ruimte/ruimte.component';
import {FormsModule} from '@angular/forms';
import { RuimtedetailsComponent } from './components/ruimtedetails/ruimtedetails.component';
import {RouterModule, Routes} from '@angular/router';
import { SettingspaneelComponent } from './components/settingspaneel/settingspaneel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';


import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: PlattegrondComponent
  },
  {
    path: 'plattegrond',
    component: PlattegrondComponent,
    children: [ {
      path: 'ruimtedetails/:id',
      component: RuimtedetailsComponent
    }]
  }
  ,
  {
    path: 'ruimtedetails/:id',
    component: RuimtedetailsComponent
  }
];

@NgModule({
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: [
    AppComponent,
    PlattegrondComponent,
    RuimteComponent,
    RuimtedetailsComponent,
    SettingspaneelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    ),
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    ),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(): void {

  }
}
