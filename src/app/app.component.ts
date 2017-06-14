import { Component, OnInit} from '@angular/core';
import { NoteMaker } from '../note/noteMaker.component';
import DbService from './db.service';
import Note from '../note/note.model';
import NoteItem from '../note/noteItem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

   onAddTodo(note) {
    console.log("YES");
    this._dbService
      .addNote(note)
      .subscribe(
        (newNote) => {
          this.notes = this.notes.concat(newNote);
        }
      );
  }
}
