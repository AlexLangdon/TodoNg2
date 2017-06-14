import { Component, Input } from "@angular/core";
import Note from "./note.model";

@Component({
    selector: 'noteItem',
    templateUrl: 'noteItem.component.html',
    styleUrls: ['noteItem.component.css']
})
export default class NoteItem {
    @Input() 
        test: Note;
}