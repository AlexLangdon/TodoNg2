import { environment } from '../environments/environment'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import Note from '../note/note.model';
import NoteItem from '../note/noteItem.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const DB_URL = environment.dbUrl

@Injectable()
export default class DbService {

  constructor(private http:Http) { }

  public addNote(note: Note) {
    console.log(note);
    return this.http.post(DB_URL + '/notes', note)
    .map(response => {return new Note(response.json())})
    .catch(this.handleError);
  }

  public getAllNotes(): Observable<Note[]> {
    return this.http.get(DB_URL + '/notes')
      .map(response => {
        const notes = response.json();
        return notes.map((note) => new Note(note));
      })
      .catch(this.handleError);
  }

  public removeNote(id: number): Observable<null> {
    return this.http.delete(DB_URL + '/notes/'+ id)
    .catch(this.handleError);
  }

  public updateNote(note: Note): Observable<Note> {
    return this.http.put(DB_URL + '/notes/' + note.id, note)
    .map((response) => {console.log(new Note(response.json)); return new Note(response.json)})
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('DbService::handleError', error);
    return Observable.throw(error);
  }
}
