import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MayorAUnoPipe } from './mayor-auno.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MayorAUnoPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
