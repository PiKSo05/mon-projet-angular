import { Component, OnInit, Input } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatus:string;

  constructor() { }

  ngOnInit() {
  }
  getColor(){
    if(this.appareilStatus === 'allumé'){
      return 'green';
    } else if(this.appareilStatus === 'éteint'){
      return 'red';
    }
  }
  getStatus() {
    return this.appareilStatus;
  }

}
