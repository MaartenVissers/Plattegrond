import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../services/settings.service';
import {Settings} from '../../model/settings';

@Component({
  selector: 'app-settingspaneel',
  templateUrl: './settingspaneel.component.html',
  styleUrls: ['./settingspaneel.component.css']
})
export class SettingspaneelComponent {
  settings: Settings;

  constructor(private settingsService: SettingsService) {
    if (this.getSettings() === null){
      this.settings = this.getSettings();
      this.setLocalStorageSettings(this.settings);
    } else {
      this.settings = this.getSettings();
    }

    this.settingsService.changeSettings(this.settings);


  }

  getSettings(): Settings {
    let localStorageItem = JSON.parse(localStorage.getItem('settings'));
    return localStorageItem == null ? new Settings() : localStorageItem.settings;
  }

  setLocalStorageSettings(settings: Settings): void {
    localStorage.setItem('settings', JSON.stringify({settings: settings}));
  }


  seeNaam(status) {
    if (status === 'checked') {
      this.settings.name = true;
    } else {
      this.settings.name = false;
    }
    this.setLocalStorageSettings(this.settings);
    this.settingsService.changeSettings(this.settings);
  }

  seeType(status) {
    if (status === 'checked') {
      this.settings.type = true;
    } else {
      this.settings.type = false;
    }
    this.setLocalStorageSettings(this.settings);
    this.settingsService.changeSettings(this.settings);
  }

  seeBezet(status) {
    if (status === 'checked') {
      this.settings.bezet = true;
    } else {
      this.settings.bezet = false;
    }
    this.setLocalStorageSettings(this.settings);
    this.settingsService.changeSettings(this.settings);
  }

  seeBeamer(status) {
    if (status === 'checked') {
      this.settings.beamer = true;
    } else {
      this.settings.beamer = false;
    }
    this.setLocalStorageSettings(this.settings);
    this.settingsService.changeSettings(this.settings);
  }

  seeCapaciteit(status) {
    if (status === 'checked') {
      this.settings.capaciteit = true;
    } else {
      this.settings.capaciteit = false;
    }
    this.setLocalStorageSettings(this.settings);
    this.settingsService.changeSettings(this.settings);
  }

}
