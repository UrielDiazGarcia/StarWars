import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
data:any[];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params=>{
      this.data =params["datos"]
    });
  }

  ngOnInit() {
  }

}
