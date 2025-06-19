import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Foto } from '../interface/foto';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private readonly STORAGE_KEY = 'prendas-favoritas';
  private favoritosSubject = new BehaviorSubject<Foto[]>([]);
  public favoritos$ = this.favoritosSubject.asObservable();

  constructor() { 
    // Cargar favoritos al inicializar el servicio
    this.cargarFavoritosDesdeStorage();
  }

  // Cargar favoritos desde localStorage
  private cargarFavoritosDesdeStorage(): void {
    try {
      const favoritosGuardados = localStorage.getItem(this.STORAGE_KEY);
      if (favoritosGuardados) {
        const favoritos = JSON.parse(favoritosGuardados);
        this.favoritosSubject.next(favoritos);
      }
    } catch (error) {
      console.error('Error al cargar favoritos:', error);
    }
  }

  // Guardar favoritos en localStorage
  private guardarFavoritosEnStorage(favoritos: Foto[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favoritos));
    } catch (error) {
      console.error('Error al guardar favoritos:', error);
    }
  }

  // Obtener todos los favoritos
  getFavoritos(): Foto[] {
    return this.favoritosSubject.value;
  }

  // Agregar a favoritos
  agregarFavorito(prenda: Foto): void {
    const favoritos = this.getFavoritos();
    const yaExiste = favoritos.some(fav => fav.id === prenda.id);
    
    if (!yaExiste) {
      prenda.esFavorito = true;
      const nuevosFavoritos = [...favoritos, prenda];
      this.favoritosSubject.next(nuevosFavoritos);
      this.guardarFavoritosEnStorage(nuevosFavoritos); // Guardar en localStorage
    }
  }

  // Quitar de favoritos
  quitarFavorito(prendaId: number): void {
    const favoritos = this.getFavoritos().filter(fav => fav.id !== prendaId);
    this.favoritosSubject.next(favoritos);
    this.guardarFavoritosEnStorage(favoritos); // Actualizar localStorage
  }

  // Toggle favorito (agregar o quitar)
  toggleFavorito(prenda: Foto): void {
    if (prenda.esFavorito) {
      prenda.esFavorito = false;
      this.quitarFavorito(prenda.id);
    } else {
      this.agregarFavorito(prenda);
    }
  }

  // Verificar si una prenda es favorito
  esFavorito(prendaId: number): boolean {
    return this.getFavoritos().some(fav => fav.id === prendaId);
  }

  // Método para limpiar todos los favoritos (útil para testing)
  limpiarFavoritos(): void {
    this.favoritosSubject.next([]);
    localStorage.removeItem(this.STORAGE_KEY);
  }
}