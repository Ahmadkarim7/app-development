import { Component } from '@angular/core';
import { User } from './user.model';
import { User_repository } from './repository.model';
import { FormsModule} from '@angular/forms'

@Component({
  selector: 'user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  model:User_repository = new User_repository()
  newuser:User = new User()

  get jsonUser(){
    return JSON.stringify(this.newuser)
  }

  adduser(u:User){
    console.log("New user is" + this.jsonUser)
  }

  displaylog(model:any){
    console.log(model)
  }
}
