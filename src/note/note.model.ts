export class NoteModel {
    id: number;
    // Index is the order the note comes in the list
    index: number;
    contents: string;
    complete: boolean;

    constructor(values: Object  = {}) {
        Object.assign(this, values);
    }
}
