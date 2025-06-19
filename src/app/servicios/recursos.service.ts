import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Foto } from '../interface/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private apiUrl = 'https://raw.githubusercontent.com/danieee5/ropa-servicio-json/main/ropa.json'; //usar raw para coger el mismo archivo 

  constructor(private http: HttpClient) { }

  getFotos(): Observable<Foto[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.prendas)
    );
  }
}