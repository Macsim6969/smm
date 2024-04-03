import {Component, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {UserData} from "../../interfaces/backend.interface";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent  implements OnInit{
public userData: UserData
  constructor(
    private store: StoreService
  ) {}
  ngOnInit() {
    this.getUserDataFromStore();
  }

  private getUserDataFromStore(){
    this.store._userData$.subscribe((data: UserData) =>{
     this.userData = Object.values(data)[0];
      console.log(Object.values(data))
    })
  }

}
