import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../../Services/appareil.service'
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  estAuthentifie = false;
  appareilSubscription: Subscription;

  dateDernierControle = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  appareils: any[];
  

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.estAuthentifie = true;
      }, 2000
    );
  }

  onSave() {
    this.appareilService.saveAppareilToServer();
  }
  onFetch(){
    this.appareilService.getAppareilFromServer();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }
}
