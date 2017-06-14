import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteMaker } from '../note/noteMaker.component';
import DbService from './db.service';
import NoteItem from '../note/noteItem.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteMaker,
    NoteItem
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
