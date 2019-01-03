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
  geselecteerdeRuimte: string;

  constructor(private settingsService: SettingsService, private componentService: ComponentService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);

  }

  reserveer() {
    let eindDatum = new Date();
    eindDatum.setHours(eindDatum.getHours() + Number(this.selectedOption));
    this.ruimte.bezet = true;
    this.ruimte.gereserveerd = true;
    this.ruimte.eindDatumReservatie = eindDatum;
    console.log(eindDatum.toLocaleString());

  }

  onClick() {
    this.componentService.changeRuimte(this.ruimte);
    this.componentService.currentRuimte.subscribe(ruimte => this.geselecteerdeRuimte = ruimte);
    setTimeout(this.test, 5000, this.componentService);

  }

  test(componentService) {
    componentService.changeRuimte('');
  }

  /*@HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event);
  }
*/
}
