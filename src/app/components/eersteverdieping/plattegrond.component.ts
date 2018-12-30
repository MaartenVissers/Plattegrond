import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { DataService} from '../../services/data.service';
import {Ruimte} from '../../model/ruimte';
import {ComponentService} from '../../services/component.service';
import {Verdieping} from '../../model/verdieping';

@Component({
  selector: 'app-plattegrond',
  templateUrl: './plattegrond.component.html',
  styleUrls: ['./plattegrond.component.css']
})
export class PlattegrondComponent implements OnInit {
  ruimtesSet: Ruimte[];
  verdiepingSet: Verdieping[];

  constructor(private dataService: DataService, private componentService: ComponentService) {
     }

  ngOnInit() {
    this.dataService.getVerdiepingen().subscribe(
      (verdiepingen) => {
        this.verdiepingSet = verdiepingen;
        console.log(verdiepingen);
        console.log(this.verdiepingSet);
        this.ruimtesSet = verdiepingen[0].ruimtes;
      }
    );
  }

  setVerdieping(verdieping) {
      this.ruimtesSet = verdieping.ruimtes;
  }

  onClick(ruimte) {
    this.componentService.changeRuimte(ruimte);
  }




}
