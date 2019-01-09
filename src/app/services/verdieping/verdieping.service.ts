import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Verdieping} from '../../model/verdieping';

@Injectable({
  providedIn: 'root'
})
export class VerdiepingService {
  private verdiepingsSource = new BehaviorSubject(new Verdieping());
  currentVerdieping = this.verdiepingsSource.asObservable();

  constructor() { }

  changeVerdieping(verdieping: Verdieping) {
    this.verdiepingsSource.next(verdieping);
  }
}
