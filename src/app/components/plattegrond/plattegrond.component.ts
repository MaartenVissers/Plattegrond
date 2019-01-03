import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { DataService} from '../../services/data.service';
import {Ruimte} from '../../model/ruimte';
import {ComponentService} from '../../services/component.service';
import {Verdieping} from '../../model/verdieping';
import {RuimteService} from '../../services/ruimte.service';
import {Settings} from '../../model/settings';
import {SettingsService} from '../../services/settings.service';

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
  verdieping: Verdieping;
  settings: Settings;

  constructor(private dataService: DataService, private componentService: ComponentService, private ruimteService: RuimteService, private settingsService: SettingsService) {
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

    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);
  }

  setVerdieping(verdieping) {
    console.log(verdieping);
    this.ruimteService.changeVerdieping(verdieping);
    this.verdieping = verdieping;
      this.ruimtesSet = verdieping.ruimtes;

    if (this.isView) {

      this.ruimtesSet.sort(function(a, b){return a.plattegrondCoördinaat - b.plattegrondCoördinaat});
    } else {
      this.ruimtesSet.sort(function(a, b){return a.id.localeCompare(b.id)});

    }
  }



/*  toggleView() {
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
}*/




}
