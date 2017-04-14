import { TitleService } from './../title.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  is_h3_highlight = false;

  counter = 0;

  constructor(public titleSvc: TitleService) {

  }

  ngOnInit() {
  }

  changeTitle(evt: MouseEvent) {
    this.titleSvc.title = "The Will Will ~Web";
    console.log(evt);
    console.log(evt.clientX);
    this.counter++;
  }

  getStyle() {
    return {'background-color': 'yellow'};
  }
}
