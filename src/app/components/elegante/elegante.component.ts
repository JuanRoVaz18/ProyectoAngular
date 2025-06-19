import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Foto } from '../../interface/foto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-elegante',
  templateUrl: './elegante.component.html',
  styleUrls: ['./elegante.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EleganteComponent implements OnInit {
  prendasElegantes: Foto[] = [];
  etiquetasVisibles: { [key: number]: boolean } = {};

  constructor(
    private recursosService: RecursosService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.recursosService.getFotos().subscribe((datos: Foto[]) => {
      this.prendasElegantes = datos.filter(prenda => prenda.categoria === 'elegante');
      console.log('Prendas elegantes:', this.prendasElegantes);
    });
  }

  toggleEtiquetas(prendaId: number): void {
    this.etiquetasVisibles[prendaId] = !this.etiquetasVisibles[prendaId];
  }

  mostrarEtiquetas(prendaId: number): boolean {
    return !!this.etiquetasVisibles[prendaId];
  }

  // Nuevo método para manejar favoritos
  toggleFavorito(prenda: Foto): void {
    this.favoritosService.toggleFavorito(prenda);
  }

  // Nuevo método para verificar si es favorito
  esFavorito(prenda: Foto): boolean {
    return prenda.esFavorito || false;
  }
}