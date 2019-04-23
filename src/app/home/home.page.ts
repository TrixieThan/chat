import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  datosRecibidos = null;

  constructor(private activatedRoute: ActivatedRoute){
  }

  ngOnInit(){
    this.datosRecibidos = this.activatedRoute.snapshot.paramMap.get('datos');
  }
}
