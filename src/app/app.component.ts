import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Oups, une erreur est survenue!');
      },
      () => {
        console.log('Observable complet!');
      }
    );
  }

  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
