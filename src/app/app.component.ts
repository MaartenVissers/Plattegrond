import {Component, OnInit} from '@angular/core';
import {PlattegrondComponent} from './components/plattegrond/plattegrond.component';


@Component({
  selector: 'app-root',
  providers: [PlattegrondComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor() {

  }



  ngOnInit() {


  }
}
