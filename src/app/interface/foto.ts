export interface Foto {
  id: number;
  url: string;
  valor: number;
  usuario: string;
  nombrePrenda: string;
  generoPrenda: string;
  categoria: string;
  etiquetas: string[];
  mostrarEtiquetas?: boolean;
  esFavorito?: boolean; 
}