import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ComponentService} from '../../services/component.service';
import {SettingsService} from '../../services/settings.service';
import {Settings} from '../../model/settings';
import {Ruimte} from '../../model/ruimte';

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

  constructor(private settingsService: SettingsService, private componentService: ComponentService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);

  }

  reserveer() {
    const eindDatum = new Date();
    if (this.selectedOption) {
      eindDatum.setHours(eindDatum.getHours() + Number(this.selectedOption));
      this.ruimte.bezet = true;
      this.ruimte.gereserveerd = true;
      this.ruimte.eindDatumReservatie = eindDatum;
      console.log(eindDatum.toLocaleString());
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
