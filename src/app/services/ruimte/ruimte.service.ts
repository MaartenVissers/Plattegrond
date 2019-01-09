import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Ruimte} from '../../model/ruimte';

@Injectable({
  providedIn: 'root'
})
export class RuimteService {

  private ruimtesSource = new BehaviorSubject(new Ruimte());
  currentRuimte = this.ruimtesSource.asObservable();



  constructor(private http: HttpClient) { }

  changeRuimte(ruimte: Ruimte) {
    this.ruimtesSource.next(ruimte);
  }
}
