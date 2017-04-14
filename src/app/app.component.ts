import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  keyword = "";

  changeKeyword(evt: KeyboardEvent) {
    this.keyword = (evt.target as HTMLInputElement).value;
  }
}
