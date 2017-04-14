import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = "保哥的網頁";

  @Output()
  titleChanged = new EventEmitter();

  is_h3_highlight = false;

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTitle(evt: MouseEvent) {
    this.title = "The Will Will ~Web";
    this.titleChanged.emit(this.title);
    console.log(evt);
    console.log(evt.clientX);
    this.counter++;
  }

  getStyle() {
    return {'background-color': 'yellow'};
  }
}
