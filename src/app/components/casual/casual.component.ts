import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Foto } from '../../interface/foto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrls: ['./casual.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class CasualComponent implements OnInit {
  prendasCasuales: Foto[] = [];
  etiquetasVisibles: { [key: number]: boolean } = {};

  constructor(
    private recursosService: RecursosService,
    private favoritosService: FavoritosService
  ) {}

  ngOnInit(): void {
    this.recursosService.getFotos().subscribe((datos: Foto[]) => {
      this.prendasCasuales = datos.filter(prenda => prenda.categoria === 'casual');
      console.log('Prendas casuales:', this.prendasCasuales);
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