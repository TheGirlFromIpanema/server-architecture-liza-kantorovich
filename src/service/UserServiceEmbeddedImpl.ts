import {UserService} from "./UserService.ts";
import {User} from "../model/userTypes.ts";

export  class UserServiceEmbeddedImpl implements UserService{
    private users: User[] = [];
    addUser(user: User): boolean {
        if(this.users.findIndex((u:User) => u.id === user.id) === -1)
        {
            this.users.push(user);
            return true;
        }
        return false;
    }

    getAllUsers = () => [...this.users];

    updateUser = (newUserData: User): boolean => {
        const index = this.users.findIndex(elem => elem.id === newUserData.id)
        if (index !== -1) {
            this.users[index] = newUserData;
            return true
        }
        return false
    }

    removeUser = (userId: number): User | null => {
        const index = this.users.findIndex(elem => elem.id === userId);
        if (index !== -1) {
            const temp = this.users[index];
            this.users.splice(index, 1);
            return temp;
        }
        return null
    }

    getUser = (userId: number): User | null => {
        const index = this.users.findIndex(elem => elem.id === userId);
        if (index !== -1) {
            return this.users[index];
        }
        return null
    }

}