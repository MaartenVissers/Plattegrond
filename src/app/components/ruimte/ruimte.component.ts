import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SettingsService} from '../../services/settings/settings.service';
import {Settings} from '../../model/settings';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-ruimte',
  templateUrl: './ruimte.component.html',
  styleUrls: ['./ruimte.component.css']
})
export class RuimteComponent implements OnInit {
  selectedOption: number;
  @Input() ruimte;
  settings: Settings;
  @Input() geselecteerdeRuimte: string;
  @Input() timeout;
  @Input() gereserveerdeRuimtes;
  backgroundColor;

  constructor(private dataService: DataService, private settingsService: SettingsService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);
    if (this.ruimte.bezet) {
      this.backgroundColor = 'red';
    } else if (this.ruimte.drukte != null) {
      {
        this.veranderBackground();

      }
    }
  }

  reserveer() {
    const eindDatum = new Date();
    if (this.selectedOption) {
      this.ruimte.startDatumReservatie = new Date();
      // Demo: setHours en getHours naar set en getMinutes
      eindDatum.setHours(eindDatum.getHours() + Number(this.selectedOption));
      this.ruimte.gereserveerd = true;
      this.ruimte.eindDatumReservatie = eindDatum;
      this.gereserveerdeRuimtes.push(this.ruimte);
      this.dataService.updateRuimte(this.ruimte).subscribe();
    }
  }

  onInfoClick() {
    clearTimeout(this.timeout);
  }

  veranderBackground() {
    const h = (1 - (this.ruimte.drukte / this.ruimte.capaciteit)) * 120;
    this.backgroundColor = 'hsl(' + h + ', 60%, 50%)';
    this.dataService.updateRuimte(this.ruimte).subscribe();


  }
}
