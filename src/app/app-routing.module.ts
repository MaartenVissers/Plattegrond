import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // Add your component here
import { PlattegrondComponent} from './components/plattegrond/plattegrond.component';
import {RuimtedetailsComponent} from './components/ruimtedetails/ruimtedetails.component';



@NgModule({

  exports: [RouterModule]
})
export class AppRoutingModule { }
