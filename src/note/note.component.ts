import { Component, Input, Output, EventEmitter} from "@angular/core";
import { NoteModel } from "./note.model";

// The display component for a note model
@Component({
    selector: 'note',
    templateUrl: 'note.component.html',
    styleUrls: ['note.component.css']
})
export class Note {

    @Input()
        note: NoteModel;

    @Output()
       remove = new EventEmitter<number>();

    @Output()
       update = new EventEmitter<NoteModel>();

    // Returns index order for the note
    @Input()
        set index(i: number) {
            this.note.index = i;
            this.update.emit(this.note);
        }

        get index(): number{
            return this.note.index;
        }

    removeNote() {
        this.remove.emit(this.note.id);
    }

    toggleCompleted() {
        this.note.complete = !this.note.complete;
        this.update.emit(this.note);
    }
}
