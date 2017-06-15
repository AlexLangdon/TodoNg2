import { Component, OnInit} from '@angular/core';
import { NoteMaker } from '../note/noteMaker.component';
import DbService from './db.service';
import Note from '../note/note.model';
import NoteItem from '../note/noteItem.component';
import {DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [DragulaService]
})
export class AppComponent {

  notes: Note[] = [];

  constructor(private _dbService: DbService){
  }

  //Called after constructor
  public ngOnInit() {
    this._dbService.getAllNotes()
    .subscribe((dbNotes) => {
      this.notes = dbNotes;
    });
  }

  addNote(note:Note) {
    this._dbService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this.notes = this.notes.concat(newNote);
        }
      );
  }

  removeNote(id:number) {
    this._dbService
      .removeNote(id)
      .subscribe((_) => this.notes = this.notes.filter((n => n.id !== id)))
  }

  updateNote(note:Note) {
     this._dbService
      .updateNote(note)
      .subscribe((updatedNote) => {console.log(updatedNote);note = updatedNote;});

  }
}
