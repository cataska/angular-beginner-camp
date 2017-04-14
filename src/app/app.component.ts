import { Http } from '@angular/http';
import { TitleService } from './title.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  keyword = "";

  constructor(public titleSvc: TitleService, private http: Http) {
    this.http.get('/api/articles.json')
      .subscribe(res => {
        this.data = res.json();
      })
  }

  changeKeyword(evt: KeyboardEvent) {
    this.keyword = (evt.target as HTMLInputElement).value;
  }

  data: any;
}
