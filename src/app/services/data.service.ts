import { Injectable } from '@angular/core';
import { Ruimte } from '../model/ruimte';
import { Verdieping } from '../model/verdieping';
import { HttpClient } from '@angular/common/http';
import { filter, retry } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private ruimtesEersteVerdieping = 'api/verdiepingen';

  constructor(private http: HttpClient) { }g

  public getVerdiepingen(): Observable<Verdieping[]> {
    return this.http.get<Verdieping[]>(this.ruimtesEersteVerdieping);
  }


}
