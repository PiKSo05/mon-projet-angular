import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  estAuthentifie = false;

  dateDernierControle = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
        }, 2000
    );
  });

  listeAppareils = [
    {
      nom: "Machine à laver",
      statut: "éteint"
    },
    {
      nom: "Réfrigérateur",
      statut: "allumé"
    },
    {
      nom: "Four",
      statut: "éteint"
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.estAuthentifie = true;
      }, 2000
    );
  }
  onAllumer(){
    console.log('On allume tout!');
  }
}
