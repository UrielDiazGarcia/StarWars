import { Component } from '@angular/core';
import {Router, NavigationExtras} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arreDatos: any;
  constructor( private route: Router){}

  ir(){

    this.route.navigateByUrl('/personajes');
}
  navega(){
    let navegationExtras: NavigationExtras= {
      queryParams:{
        "datos": this.arreDatos
      }
    };
    this.route.navigate(['/personajes'], navegationExtras);
    this.route.navigateByUrl('/personajes');
  }
dataSend: DatosX={
  Edad: "77",
  Nombre: "Lucia"
}
  }

interface DatosX{
  Nombre?:  string;
  Edad?:  string;
  Genero?:  string;
}
