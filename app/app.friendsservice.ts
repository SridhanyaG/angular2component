import { Injectable } from '@angular/core';

@Injectable()
export class FriendService {
    friends: Array<IFriend>;
    constructor() {
        this.friends = [
            { name: "john doe", age: 45, color: "grey", previousColor: "" },
            { name: "jane doe", age: 39, color: "yellow", previousColor: "" },
            { name: "daisy", age: 12, color: "green", previousColor: "" },
            { name: "Luci", age: 32, color: "black", previousColor: "" },
            { name: "Rebecca", age: 23, color: "red", previousColor: "" }
        ]

    }

}

export interface IFriend {
    name: string;
    age: number;
    color: string;
    previousColor: string;
}