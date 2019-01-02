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

@NgModule({
  declarations: [
    AppComponent,
    PlattegrondComponent,
    RuimteComponent,
    RuimtedetailsComponent
  ],
  imports: [
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
