import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private titulo = "FACTURAS";
  logo = "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1436554261/afs3j3rytpvs9xnojeuj.png";
  getTitulo(){
    return this.titulo;
  }
  getLogo(){
    return this.logo;
  }
  constructor() { }

  ngOnInit() {
  }

}
