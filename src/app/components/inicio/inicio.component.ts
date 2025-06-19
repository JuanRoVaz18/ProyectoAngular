import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { Foto } from '../../interface/foto';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  fotos: Foto[] = []; // Aún útil si deseas mostrar looks recomendados
  noticias: any[] = []; // Nuevas noticias dinámicas

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

    // Datos de ejemplo para historias de moda
    this.noticias = [
      {
        titulo: 'Los 5 Looks Que Dominarán Esta Temporada',
        descripcion: 'Descubre las tendencias que marcarán el 2024.',
        img: 'assets/images/featured-article.jpg',
        link: '/tendencias'
      },
      {
        titulo: 'Estilo de Oficina con Impacto',
        descripcion: 'Cómo vestir con autoridad y confianza.',
        img: 'assets/images/news1.jpg',
        link: '/oficina'
      },
      {
        titulo: 'Estilo Urbano al Máximo',
        descripcion: 'Las claves del streetwear con actitud.',
        img: 'assets/images/news2.jpg',
        link: '/urbano'
      }
    ];
  }

  subscribeNewsletter(): void {
    alert('¡Gracias por suscribirte!');
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/default-placeholder.png';
  }

  loadMoreArticles(): void {
    this.noticias.push(
      {
        titulo: 'Vacaciones con Estilo',
        descripcion: 'Los mejores looks para tus escapadas.',
        img: 'assets/images/news3.jpg',
        link: '/vacaciones'
      }
    );
  }
}