export default class Note {
    id: number;
    index: number;
    contents: string;
    complete: boolean;

    constructor(values: Object  = {}){
        Object.assign(this,values);
    }
}