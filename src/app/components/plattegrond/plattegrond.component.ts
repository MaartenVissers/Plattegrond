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
  cssClass: string;
  isView: boolean;
  toggleButtonText: string;

  constructor(private dataService: DataService, private componentService: ComponentService) {
    this.cssClass = 'wrapper';
    this.isView = true;
    this.toggleButtonText = 'Lijst Weergave';

     }

  ngOnInit() {
    this.dataService.getVerdiepingen().subscribe(
      (verdiepingen) => {
        this.verdiepingSet = verdiepingen;
        this.ruimtesSet = verdiepingen[0].ruimtes;
      }
    );
  }

  setVerdieping(verdieping) {
      this.ruimtesSet = verdieping.ruimtes;
    if (this.isView) {

      this.ruimtesSet.sort(function(a, b){return a.plattegrondCoördinaat - b.plattegrondCoördinaat});
    } else {
      this.ruimtesSet.sort(function(a, b){return a.id.localeCompare(b.id)});

    }
  }

  onClick(ruimte) {
    this.componentService.changeRuimte(ruimte);
  }
  toggleView() {
    this.isView = !this.isView;

    if (this.isView) {
      this.cssClass = 'wrapper';
      this.toggleButtonText = 'Lijst Weergave';
      this.ruimtesSet.sort(function(a, b){return a.plattegrondCoördinaat - b.plattegrondCoördinaat});
    } else {
      this.toggleButtonText = 'Plattegrond Weergave';
      this.cssClass = 'list';
      this.ruimtesSet.sort(function(a, b){return a.id.localeCompare(b.id)});

    }
}

reserveer(ruimte) {
    ruimte.gereserveerd = true;
    ruimte.eindDatumReservatie = Date.now();
    console.log(ruimte.eindDatumReservatie);
    console.log(ruimte);
}




}
