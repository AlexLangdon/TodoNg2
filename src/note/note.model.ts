export default class Note {
    id: number;
    contents: string;
    complete: boolean;

    constructor(values: Object  = {}){
        Object.assign(this,values);
    }
}