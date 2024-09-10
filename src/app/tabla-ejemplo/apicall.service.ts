import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApicallService {
  public api: string = 'https://jsonplaceholder.typecode.com/todos/';

  constructor(private readonly _http: HttpClient) {}

  public obtenerInfo(): Observable<any> {
    return this._http.get<any>(this.api);
  }

  public obtenerElemento(id: number): Observable<any> {
    return this._http.get<any>(`${this.api}/${id}`);
  }
}
