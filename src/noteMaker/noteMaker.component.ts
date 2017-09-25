import { Component, Output, EventEmitter } from '@angular/core';
import { NoteModel } from '../note/note.model';

@Component({
  selector: 'noteMaker',
  templateUrl: './noteMaker.component.html',
  styleUrls: ['./noteMaker.component.css']
})

export class NoteMaker {

    private _newNote: NoteModel = new NoteModel();

    @Output()
    addEmitter: EventEmitter<NoteModel> = new EventEmitter();

    makeNote() {
        this.addEmitter.emit(this._newNote)
        this._newNote = new NoteModel();
    }
}
