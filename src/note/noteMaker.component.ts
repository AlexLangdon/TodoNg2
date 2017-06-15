import { Component, Output, EventEmitter } from '@angular/core';
import DbService from '../app/db.service';
import Note from './note.model';

@Component({
  selector: 'noteMaker',
  templateUrl: './noteMaker.component.html',
  styleUrls: ['./noteMaker.component.css']
})

export class NoteMaker {

    private _newNote: Note = new Note();

    @Output()
    addEmitter: EventEmitter<Note> = new EventEmitter();

    constructor(){
    }

    makeNote(){
        this.addEmitter.emit(this._newNote)
        this._newNote = new Note();
    }
}