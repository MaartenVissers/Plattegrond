import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { PlattegrondComponent } from './components/eersteverdieping/plattegrond.component';

import { InMemoryDataService } from './services/in-memory-data.service';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { RuimteComponent } from './components/ruimte/ruimte.component';
import { TweedeverdiepingComponent } from './components/tweedeverdieping/tweedeverdieping.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlattegrondComponent,
    RuimteComponent,
    TweedeverdiepingComponent
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
