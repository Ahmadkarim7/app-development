//this file is used to save each users information in an array
import { User } from "./user.model";

export class Datasource{
    private users:User[]

    //construct an array with different users
    constructor(){
        this.users = new Array<User>(
            new User(1, 'Ahmad Karim', 'ahmadadilkarim@gmail.com'),
            new User(2, 'Prof Smith', 'msmith@qcc.cuny.edu')

        )
    }
    //define a gesture method to return the array users
    gesture():User[]{
        return this.users
    }
}