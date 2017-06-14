export default class Note {
    id: number;
    contents: "";
    complete: boolean;

    constructor(values: Object  = {}){
        Object.assign(this,values);
    }
}

