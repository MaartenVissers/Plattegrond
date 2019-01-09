import {Injectable} from '@angular/core';
import {Ruimte} from '../../model/ruimte';
import {Verdieping} from '../../model/verdieping';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, filter, retry, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private verdiepingenUrl = 'api/verdiepingen';
  private ruimtesUrl = 'api/ruimtes';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  public getVerdiepingen(): Observable<Verdieping[]> {
    return this.http.get<Verdieping[]>(this.verdiepingenUrl);
  }

  public getRuimtes(): Observable<Ruimte[]> {
    return this.http.get<Ruimte[]>(this.ruimtesUrl);
  }

  updateRuimte(ruimte: Ruimte): Observable<any> {
    return this.http.put(this.ruimtesUrl, ruimte, this.httpOptions).pipe(
      tap(_ => console.log(`updated ruimte id=${ruimte.id}`)),
      catchError(this.handleError<any>('updateRuimte'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  getVerdieping(id: number): Observable<Verdieping> {
    const url = `${this.verdiepingenUrl}/${id}`;
    return this.http.get<Verdieping>(url).pipe(
      tap(_ => console.log(`fetched verdieping id=${id}`)),
      catchError(this.handleError<Verdieping>(`getVerdieping id=${id}`))
    );
  }

}
