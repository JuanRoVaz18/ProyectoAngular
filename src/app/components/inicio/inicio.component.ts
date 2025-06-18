import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';  // Asegúrate de importar el servicio
import { Foto } from '../../interface/foto';  // Asegúrate de importar la interfaz Foto

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  fotos: Foto[] = [];  // Arreglo donde guardaremos las fotos

  constructor(private recursosService: RecursosService) { }

  ngOnInit(): void {
    // Obtener fotos del servicio
    this.recursosService.getFotos().subscribe(
      (data) => {
        this.fotos = data;  // Guardar las fotos en el arreglo
        console.log(this.fotos);  // Verifica en la consola si los datos se están cargando correctamente
      },
      (error) => {
        console.error('Error al obtener las fotos', error);  // Manejo de errores
      }
    );
  }
}
