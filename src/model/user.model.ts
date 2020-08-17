export class User {
    constructor(public id: string, public name: string, public surname: string, public outReq?: string[], public inReq?: string[], public friends?: string[]) {};
}