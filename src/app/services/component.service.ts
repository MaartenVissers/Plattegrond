import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private ruimtesSource = new BehaviorSubject('');
  currentRuimte = this.ruimtesSource.asObservable();



  constructor() { }

  changeRuimte(ruimte: string) {
    this.ruimtesSource.next(ruimte);
  }




}
