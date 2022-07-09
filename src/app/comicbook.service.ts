import { Injectable } from '@angular/core';
import { Comicbook } from './comicbooks';
import { COMICBOOKS } from './mockdatabase';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ComicbookService {
  [x: string]: any;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private comicbooksUrl = 'api/comicbooks';  // URL to web api
  private log(message: string) {
    this['messageService'].add(`ComicbookService: ${message}`);
  }

  constructor(
    private http: HttpClient,
  ) { }


  /** GET comics from the server */
  getComics(): Observable<Comicbook[]> {
    return this.http.get<Comicbook[]>(this.comicbooksUrl)
    .pipe(
      tap(_ => this.log('fetched comics')),
      catchError(this.handleError<Comicbook[]>('getComics', []))
    );
  }

  /** GET comics by id. Will 404 if id not found */
  getHero(id: number): Observable<Comicbook> {
    const url = `${this.comicbooksUrl}/${id}`;
    return this.http.get<Comicbook>(url).pipe(
      tap(_ => this.log(`fetched comicbook id=${id}`)),
      catchError(this.handleError<Comicbook>(`getComics id=${id}`))
  );
}
  
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }  


}
