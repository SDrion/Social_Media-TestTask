import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "../model/user.model";

@Injectable()
export class FriendsService {
    users: User[] = [];

    getFriends(userId: string){
        const user = this.findUser(userId)[0];
        const usersFriends: User[] = []; 
        user.friends.map(id => usersFriends.push(this.findUser(id)[0]))
        return usersFriends; 
    }

    insertUser(name: string, surname: string, outReq: string[], inReq: string[], friends: string[]) {
        const UserId = Math.random().toString();
        const newUser = new User(UserId, name, surname, outReq, inReq, friends);
        this.users.push(newUser);
        return UserId;
    }

    getInReq(userId: string){
        const user = this.findUser(userId)[0];
        const usersInReq: User[] = []; 
        user.inReq.map(id => usersInReq.push(this.findUser(id)[0]));
        return usersInReq; 
    }

    getOutReq(userId: string){
        const user = this.findUser(userId)[0];
        const usersOutReq: User[] = []; 
        user.outReq.map(id => usersOutReq.push(this.findUser(id)[0]))
        return usersOutReq; 
    }

    private findUser(userId: string): [User, number] {
        const userIndex = this.users.findIndex(u => u.id == userId);
        const user = this.users[userIndex];

        if(!user) {
            throw new NotFoundException('Cant find a user...');
        }

        return [user, userIndex];

    }
}