import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonajesDetallePage } from './personajes-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PersonajesDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonajesDetallePage]
})
export class PersonajesDetallePageModule {}
