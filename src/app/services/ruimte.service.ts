import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuimteService {

  private verdiepingsSource = new BehaviorSubject('');
  currentVerdieping = this.verdiepingsSource.asObservable();

  constructor() { }

  changeVerdieping(verdieping: string) {
    this.verdiepingsSource.next(verdieping);
  }
}
