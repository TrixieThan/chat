import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  usuario = "";
  pass = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(){
    this.router.navigate(['/home', this.usuario]);
  }

}
