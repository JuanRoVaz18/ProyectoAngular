import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interface/foto';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  imports: [RouterLink],
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  fotos: Foto[] = []; 
  noticias: any[] = []; 

  constructor(private recursosService: RecursosService) {}

  ngOnInit(): void {
    // Carga de fotos (si las necesitas en otro bloque)
    this.recursosService.getFotos().subscribe({
      next: (data) => {
        this.fotos = data;
      },
      error: (error) => {
        console.error('Error al obtener las fotos', error);
      }
    });
  }
}