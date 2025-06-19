import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Foto } from '../../interface/foto';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class FavoritosComponent implements OnInit {
  favoritos: Foto[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    // Suscribirse a los cambios de favoritos
    this.favoritosService.favoritos$.subscribe(favoritos => {
      this.favoritos = favoritos;
    });
  }

  quitarFavorito(prenda: Foto): void {
    this.favoritosService.toggleFavorito(prenda);
  }
}