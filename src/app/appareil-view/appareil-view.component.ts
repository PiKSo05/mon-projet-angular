import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../Services/appareil.service'

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  estAuthentifie = false;

  dateDernierControle = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
        }, 2000
    );
  });
  
  listeAppareils: any[];

  onAllumer(){
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils?')){
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.estAuthentifie = true;
      }, 2000
    );
  }

  ngOnInit(){
    this.listeAppareils = this.appareilService.listeAppareils;
  }
}
