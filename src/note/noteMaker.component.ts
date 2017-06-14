import { Component, Output, EventEmitter } from '@angular/core';
import DbService from '../app/db.service';
import Note from './note.model';

@Component({
  selector: 'noteMaker',
  templateUrl: './noteMaker.component.html',
  styleUrls: ['./noteMaker.component.css']
})

export class NoteMaker {
    newNote: Note = new Note();

    @Output()
    addEmitter: EventEmitter<Note> = new EventEmitter();

    constructor(){
    }

    makeNote(){
        this.addEmitter.emit(this.newNote)
        this.newNote = new Note();
    }
}