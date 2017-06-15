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

  private _notes: Note[] = [];

  constructor(private _dbService: DbService, private _dragulaService: DragulaService){
    _dragulaService.setOptions('first-bag', {
      revertOnSpill: true
    });
    _dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value);
    });
  }

  //Called after constructor
  public ngOnInit() {
    this._dbService.getAllNotes()
    .subscribe((dbNotes) => {
      this._notes = dbNotes;
    });
  }

  addNote(note:Note) {
    note.index = this._notes.length;
    this._dbService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this._notes = this._notes.concat(newNote);
        }
      );
  }

  removeNote(id:number) {
    this._dbService
      .removeNote(id)
      .subscribe((_) => this._notes = this._notes.filter((n => n.id !== id)))
  }

  updateNote(note:Note) {
     this._dbService
      .updateNote(note)
      .subscribe((updatedNote) => {note = updatedNote;});

  }

  private onDropModel(args) {}
}
