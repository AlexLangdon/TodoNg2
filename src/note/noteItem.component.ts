import { Component, Input, Output, EventEmitter} from "@angular/core";
import Note from "./note.model";

@Component({
    selector: 'noteItem',
    templateUrl: 'noteItem.component.html',
    styleUrls: ['noteItem.component.css']
})
export default class NoteItem {
    @Input() 
        note: Note;

    @Output()
       remove = new EventEmitter<number>();

    @Output()
       update = new EventEmitter<Note>();

    private _index: number;

    @Input()
        set index(i: number) {
        this._index = i;
        this.note.index = i;
        this.update.emit(this.note);
    }

    get index(): number{
        return this._index;
    }

    removeNote(){
        this.remove.emit(this.note.id);
    }

    toggleChecked(){
        this.note.complete = !this.note.complete;
        this.update.emit(this.note);
    }
}