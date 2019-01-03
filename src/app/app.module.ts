import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PlattegrondComponent } from './components/plattegrond/plattegrond.component';

import { InMemoryDataService } from './services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { RuimteComponent } from './components/ruimte/ruimte.component';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { RuimtedetailsComponent } from './components/ruimtedetails/ruimtedetails.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlattegrondComponent
  },
  {
    path: 'plattegrond',
    component: PlattegrondComponent
  }
  ,
  {
    path: 'ruimtedetails',
    component: RuimtedetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PlattegrondComponent,
    RuimteComponent,
    RuimtedetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(): void {

  }
}
