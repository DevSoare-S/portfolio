import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Certificado {
  titulo: string;
  imagem: string;
}

interface Curso {
  nome: string;
  certificados: Certificado[];
}


@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss',
})
export class CertificadosComponent {
  cursoSelecionado: Curso | null = null;
  certificadoModal: {titulo: string, imagem: string} | null = null;

  cursos: Curso[] = [
  {
    nome: 'Estudonauta',
    certificados: [
      { titulo: 'Programação básica', imagem: '/Certificado.png'},
      { titulo: 'Programação básica 01', imagem: '/Certificado01.png'},
      { titulo: 'Programação básica 02', imagem: '/Certificado02.png'},
      { titulo: 'Programação básica 03', imagem: '/Certificado03.png'},
      { titulo: 'C#', imagem: '/Certificado00C.png'},

    ]
  },

  {
    nome: 'Renato Gava',
    certificados: [
      { titulo: 'FullStack', imagem: '/Certificado.png'},
    ]
  },
  ];
  
  selecionarCurso(curso: Curso) {
    this.cursoSelecionado = curso;
  }

  abrirModal(certificado: {titulo: string, imagem: string}) {
    this.certificadoModal = certificado;
  }

  fecharModal() {
    this.certificadoModal = null;
  }

}