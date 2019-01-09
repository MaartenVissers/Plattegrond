import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Settings} from '../../model/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private settings = new Settings();
  private settingsSource = new BehaviorSubject(this.settings);
  currentSettings = this.settingsSource.asObservable();

  constructor() {
  }

  changeSettings(settings: Settings) {
    this.settingsSource.next(settings);
  }
}
