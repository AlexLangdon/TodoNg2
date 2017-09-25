import { Component, OnInit } from '@angular/core';
import { NoteMaker } from '../noteMaker/noteMaker.component';
import { DbService } from '../backend/db.service';
import { NoteModel } from '../note/note.model';
import { Note } from '../note/note.component';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  viewProviders: [DragulaService]
})
export class Dashboard implements OnInit {

  // Local store of note objects
  private _notes: NoteModel[] = [];

  // Initialise the service for the backend storage and drag and drop
  constructor(private _dbService: DbService, private _dragulaService: DragulaService) {
    // Link to the dragula html container
    _dragulaService.setOptions('first-bag', {
      revertOnSpill: true
    });
  }

  // Called after constructor
  // fetches all notes
  public ngOnInit() {
    this._dbService.getAllNotes()
    .subscribe(dbNotes => {
      this._notes = dbNotes;
    });
  }

  // Add a note model to the store
  addNote(note: NoteModel) {
    note.index = this._notes.length;
    this._dbService
      .addNote(note)
      .subscribe(newNote => this._notes = this._notes.concat(newNote));
  }

  // Remove a note with the given id from the store
  removeNote(id: number) {
    this._dbService
      .removeNote(id)
      .subscribe(_ => this._notes = this._notes.filter(n => n.id !== id));
  }

  // Update the note in the store
  updateNote(note: NoteModel) {
     this._dbService
      .updateNote(note)
      // Replace the old note with the new
      .subscribe(updatedNote => this._notes =
        this._notes.map(n => n.id === updatedNote.id ? updatedNote : n));
  }
}
