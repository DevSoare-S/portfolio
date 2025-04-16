import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'projetos',
    loadComponent: () =>
      import('./features/projetos/projetos.component').then(m => m.ProjetosComponent),
  },
  {
    path: 'jogos',
    loadComponent: () =>
      import('./features/jogos/jogos.component').then(m => m.JogosComponent),
  },
  {
    path: 'sobre',
    loadComponent: () =>
      import('./features/sobre/sobre.component').then(m => m.SobreComponent),
  },
  {
    path: 'contato',
    loadComponent: () =>
      import('./features/contato/contato.component').then(m => m.ContatoComponent),
  },
];
