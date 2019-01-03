import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {Settings} from '../../model/settings';

@Component({
  selector: 'app-settingspaneel',
  templateUrl: './settingspaneel.component.html',
  styleUrls: ['./settingspaneel.component.css']
})
export class SettingspaneelComponent implements OnInit {
  settings: Settings;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.currentSettings.subscribe(settings => this.settings = settings);
  }

  seeNaam(status){
    if (status === 'checked'){
      this.settings.name = true;
    }else{
      this.settings.name = false;
    }
  }

  seeType(status){
    if (status === 'checked'){
      this.settings.type = true;
    }else{
      this.settings.type = false;
    }
  }

  seeBezet(status){
    if (status === 'checked'){
      this.settings.bezet = true;
    }else{
      this.settings.bezet = false;
    }
  }

  seeBeamer(status){
    if (status === 'checked'){
      this.settings.beamer = true;
    }else{
      this.settings.beamer = false;
    }
  }

  seeCapaciteit(status){
    if (status === 'checked'){
      this.settings.capaciteit = true;
    }else{
      this.settings.capaciteit = false;
    }
  }

}
