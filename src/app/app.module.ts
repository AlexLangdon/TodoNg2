import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Dashboard } from '../dashboard/dashboard.component';
import { NoteMaker } from '../noteMaker/noteMaker.component';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';
import { DbService } from '../backend/db.service';
import { Note } from '../note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    Dashboard,
    NoteMaker,
    Note
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [{ provide: DbService, useClass: DbService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
