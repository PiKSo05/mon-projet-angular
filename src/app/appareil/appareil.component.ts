import { Component, OnInit, Input } from '@angular/core';
import {AppareilService } from '../Services/appareil.service';
import { getRenderedText } from '@angular/core/src/render3';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName:string;
  @Input() appareilStatus:string;
  @Input() index:number;
  @Input() id:number;

  constructor(private appareilService: AppareilService) {
   }

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
  onSwitch() {
    if(this.appareilStatus == 'éteint') {
      this.appareilService.switchOnOne(this.index);
    } else {
      this.appareilService.switchOffOne(this.index);
    }
  }
}
