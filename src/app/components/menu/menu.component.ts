import { Component, OnInit } from '@angular/core';
import { Foto } from '../../interface/foto';
import { RecursosService } from '../../servicios/recursos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  fotos: Foto[] = [];
  selectedFotoId: number | null = null;
  selectedFotoLinks: string[] = [];

  constructor(private recursosService: RecursosService) { }

  ngOnInit(): void {
    this.recursosService.getFotos().subscribe(response => {
      console.log('API Response:', response);
      this.fotos = response;
    });
  }

  //showImages(links: { href: string }[]): void {
  //  this.selectedFotoLinks = links.map(link => link.href);
  //}

  showImages(foto: Foto): void {
    if (this.selectedFotoId === foto.id) {
    // Si ya está seleccionada, la ocultamos
    this.selectedFotoId = null;
    this.selectedFotoLinks = [];
  } else {
    this.selectedFotoId = foto.id;
    this.selectedFotoLinks = [foto.url];
  }
}

  
}