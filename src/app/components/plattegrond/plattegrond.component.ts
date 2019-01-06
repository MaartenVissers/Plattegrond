import {Component, OnInit, AfterViewInit, HostListener} from '@angular/core';
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
export class PlattegrondComponent implements OnInit, AfterViewInit {
  ruimtesSet: Ruimte[];
  verdiepingSet: Verdieping[];
  cssClass: string;
  isPlattegrondView: boolean;
  toggleButtonText: string;
  verdieping: Verdieping;
  settings: Settings;
  geselecteerdeRuimte: Ruimte;
  timeout;
  gereserveerdeRuimtes: Ruimte[];

  constructor(private dataService: DataService, private componentService: ComponentService, private ruimteService: RuimteService, private settingsService: SettingsService) {
    this.cssClass = 'wrapper';
    this.isPlattegrondView = true;
    this.toggleButtonText = 'Lijst Weergave';

  }

  ngAfterViewInit(): void {
    console.log('constructor');
    this.gereserveerdeRuimtes = [];
    // Demo: zet interval naar 1000
    setInterval(this.checkGereserveerdeRuimtes, 60000, this.gereserveerdeRuimtes);
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
      if (window.innerWidth <= 700) {
        this.veranderVolgorde(false);
      } else {
        this.veranderVolgorde(this.isPlattegrondView);
      }

    });

    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);
  }

  setVerdieping(verdieping) {
    console.log(verdieping);
    this.ruimteService.changeVerdieping(verdieping);
    this.verdieping = verdieping;
    this.dataService.getRuimtes().subscribe(rs => {
      this.ruimtesSet = rs.filter(r => r.verdieping === verdieping.id);
      if (window.innerWidth <= 700) {
        this.veranderVolgorde(false);
      } else {
        this.veranderVolgorde(this.isPlattegrondView);
      }
    });



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
    this.isPlattegrondView = !this.isPlattegrondView;

    this.veranderVolgorde(this.isPlattegrondView);
  }

  checkGereserveerdeRuimtes(gereserveerdeRuimtes) {
    if (gereserveerdeRuimtes.length > 0) {
      gereserveerdeRuimtes.forEach(function (gereserveerdeRuimte, index, object) {
        const nu = new Date();
        if (gereserveerdeRuimte.eindDatumReservatie < nu) {
          gereserveerdeRuimte.startDatumReservatie = null;
          gereserveerdeRuimte.eindDatumReservatie = null;
          gereserveerdeRuimte.gereserveerd = false;
          object.splice(index, 1);
        }
      });
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 700) {
      this.veranderVolgorde(false);
    } else {
      this.veranderVolgorde(this.isPlattegrondView);
    }
  }

  veranderVolgorde(selectedView) {
    if (selectedView) {
      this.cssClass = 'wrapper';
      this.toggleButtonText = 'Lijst Weergave';
      this.ruimtesSet.sort(function (a, b) {
        return a.plattegrondCoördinaat - b.plattegrondCoördinaat;
      });
    } else {
      this.toggleButtonText = 'Plattegrond Weergave';
      this.cssClass = 'list';
      this.ruimtesSet.sort(function (a, b) {
        return a.id.localeCompare(b.id);
      });
    }

  }

}
