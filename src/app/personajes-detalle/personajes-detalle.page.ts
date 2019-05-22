import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-personajes-detalle',
  templateUrl: './personajes-detalle.page.html',
  styleUrls: ['./personajes-detalle.page.scss'],
})
export class PersonajesDetallePage implements OnInit {
  id;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
