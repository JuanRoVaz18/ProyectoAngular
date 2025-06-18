import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Foto } from '../interface/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  // Cambiamos la URL para que apunte al archivo JSON local
  private apiUrl = 'assets/servicio.json';

  constructor(private http: HttpClient) { }

  // Método para obtener fotos desde el archivo JSON
  getFotos(): Observable<Foto[]> {
    return this.http.get<Foto[]>(this.apiUrl).pipe(
      map(response => response)  // Simplemente devolvemos los datos como están
    );
  }
}
