import { environment } from '../environments/environment'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NoteModel } from '../note/note.model';
import { Note } from '../note/note.component';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const DB_URL = environment.dbUrl;

@Injectable()
export class DbService {

  constructor(private http: Http) {}

  public addNote(note: NoteModel) {
    return this.http.post(DB_URL + '/notes', note)
    .map(response => {return new NoteModel(response.json())})
    .catch(this.handleError);
  }

  public getAllNotes(): Observable<NoteModel[]> {
    return this.http.get(DB_URL + '/notes')
      .map(response => {
        // Sort notes by index
        const notes = response.json().sort((n1,n2) => n1.index - n2.index);
        return notes.map(note => new NoteModel(note));
      })
      .catch(this.handleError);
  }

  public removeNote(id: number): Observable<null> {
    return this.http.delete(DB_URL + '/notes/' + id)
      .catch(this.handleError);
  }

  public updateNote(note: NoteModel): Observable<NoteModel> {
    return this.http.put(DB_URL + '/notes/' + note.id, note)
    // Return updated note
      .map(response => {return new NoteModel(response.json)})
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('DbService::handleError', error);
    return Observable.throw(error);
  }
}
