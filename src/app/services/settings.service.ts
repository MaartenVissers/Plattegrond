import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Settings} from '../model/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings = new Settings();
  private settingsSource = new BehaviorSubject(this.settings);
  currentSettings = this.settingsSource.asObservable();

  constructor() {
    this.settings.name = true;
    this.settings.type = true;
    this.settings.capaciteit = false;
    this.settings.beamer = false;
    this.settings.bezet = true;
    this.settings.drukte = true;
  }

  changeSettings(settings: Settings) {
    this.settingsSource.next(settings);
  }
}
