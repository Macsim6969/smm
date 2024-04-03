import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserData} from "../interfaces/backend.interface";
import {Observable} from "rxjs";
import {StoreService} from "./store.service";

@Injectable()

export class BackendService{

  constructor(private http: HttpClient,
              private store: StoreService) {
  }
  public sendUserProfile(userData: UserData){
   return  this.http.post<UserData>(`https://smm-oksima-default-rtdb.firebaseio.com/users/${userData.userID}/profile.json`, userData).subscribe();
  }

  public getUserProfile(userId: string) {
    return this.http.get<UserData>(`https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/profile.json`).subscribe((data: UserData) =>{
      this.store._userData = data;
      console.log(data)
    });
  }

}
