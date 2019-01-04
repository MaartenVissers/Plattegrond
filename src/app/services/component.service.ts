import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {Ruimte} from '../model/ruimte';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {



  private ruimtesSource = new BehaviorSubject(new Ruimte());
  currentRuimte = this.ruimtesSource.asObservable();



  constructor(private http: HttpClient) { }

  changeRuimte(ruimte: Ruimte) {
    this.ruimtesSource.next(ruimte);
  }




}
