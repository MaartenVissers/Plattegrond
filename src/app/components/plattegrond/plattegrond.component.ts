import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {DataService} from '../../services/data.service';
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
  geselecteerdeRuimte: Ruimte;
  timeout;

  constructor(private dataService: DataService, private componentService: ComponentService, private ruimteService: RuimteService, private settingsService: SettingsService) {
    this.cssClass = 'wrapper';
    this.isView = true;
    this.toggleButtonText = 'Lijst Weergave';
    console.log(this.timeout);

  }

  ngOnInit() {
    this.dataService.getVerdiepingen().subscribe(
      (verdiepingen) => {
        this.verdiepingSet = verdiepingen;

      }
    );

    this.dataService.getVerdieping(1).subscribe(verdieping => {
        this.verdieping = verdieping;
      }
    );

    this.dataService.getRuimtes().subscribe(rs => {
      this.ruimtesSet = rs.filter(r => r.verdieping === 1);
    });





    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);
  }

  setVerdieping(verdieping) {
    console.log(verdieping);
    this.ruimteService.changeVerdieping(verdieping);
    this.verdieping = verdieping;
    this.dataService.getRuimtes().subscribe(rs => {
      this.ruimtesSet = rs.filter(r => r.verdieping === verdieping.id);
    });

    if (this.isView) {

      this.ruimtesSet.sort(function (a, b) {
        return a.plattegrondCoördinaat - b.plattegrondCoördinaat;
      });
    } else {
      this.ruimtesSet.sort(function (a, b) {
        return a.id.localeCompare(b.id);
      });

    }
  }

  onClick(ruimte) {
    clearTimeout(this.timeout);
    this.componentService.changeRuimte(ruimte);
    this.componentService.currentRuimte.subscribe(r => this.geselecteerdeRuimte = r);
    this.timeout = window.setTimeout(this.test, 5000, this.componentService);
  }

  test(componentService) {
    componentService.changeRuimte('');
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

}
