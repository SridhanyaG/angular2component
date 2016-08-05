import { Component, Inject } from '@angular/core';
import {FriendService, IFriend} from './app.friendsservice';

@Component({
    selector: 'my-friends',
    templateUrl:'app/app.friends.html',
    providers: [FriendService]
})
export class Friends {
    public friends;
    constructor(@Inject(FriendService) service:FriendService) {
        this.friends = service.friends;
    }

    toggleBackground(f:IFriend) {
        if (f.previousColor  === "") {
              f.previousColor = f.color;
              f.color="";  
        } else {
             f.color = f.previousColor;
             f.previousColor=""; 
        }
    }
}
