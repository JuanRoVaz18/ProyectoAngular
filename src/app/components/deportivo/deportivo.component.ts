import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Foto } from '../../interface/foto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deportivo',
  templateUrl: './deportivo.component.html',
  styleUrls: ['./deportivo.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DeportivoComponent implements OnInit {
  prendasDeportivas: Foto[] = [];
  etiquetasVisibles: { [key: number]: boolean } = {};

  constructor(
    private recursosService: RecursosService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.recursosService.getFotos().subscribe((datos: Foto[]) => {
      this.prendasDeportivas = datos.filter(prenda => prenda.categoria === 'deportivo');
      console.log('Prendas deportivas:', this.prendasDeportivas);
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
