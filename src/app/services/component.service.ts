import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Verdieping} from '../model/verdieping';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private ruimtesSource = new BehaviorSubject('');
  currentRuimte = this.ruimtesSource.asObservable();

  private verdiepingsSource = new BehaviorSubject('');
  currentVerdieping = this.verdiepingsSource.asObservable();

  constructor() { }

  changeRuimte(ruimte: string) {
    this.ruimtesSource.next(ruimte);
  }

  changeVerdieping(verdieping: string) {
    this.verdiepingsSource.next(verdieping);
  }


}
