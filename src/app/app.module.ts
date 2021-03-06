import { TitleService } from './title.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
