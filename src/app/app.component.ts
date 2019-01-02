import {Component, OnInit} from '@angular/core';
import { DataService} from './services/data.service';
import {ComponentService} from './services/component.service';
import {PlattegrondComponent} from './components/plattegrond/plattegrond.component';


@Component({
  selector: 'app-root',
  providers: [PlattegrondComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  constructor(private dataService: DataService, private componentService: ComponentService, private plattegrondComponent: PlattegrondComponent) {

  }

  setVerdieping(verdieping) {
  }


  ngOnInit() {


  }
}
