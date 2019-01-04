import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ComponentService} from '../../services/component.service';
import {SettingsService} from '../../services/settings.service';
import {Settings} from '../../model/settings';
import {Ruimte} from '../../model/ruimte';
import { DataService} from '../../services/data.service';

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

  constructor(private dataService: DataService, private settingsService: SettingsService, private componentService: ComponentService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);

  }

  reserveer() {
    const eindDatum = new Date();
    if (this.selectedOption) {
      this.ruimte.startDatumReservatie = new Date();
      eindDatum.setHours(eindDatum.getHours() + Number(this.selectedOption));
      this.ruimte.gereserveerd = true;
      this.ruimte.eindDatumReservatie = eindDatum;
      this.dataService.updateRuimte(this.ruimte).subscribe();
    }
  }

  onInfoClick() {
    clearTimeout(this.timeout);
  }



  /*@HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
  }
*/
}
