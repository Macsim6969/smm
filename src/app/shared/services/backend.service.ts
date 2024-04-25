import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {PeyementList, UserData} from "../interfaces/backend.interface";
import {StoreService} from "./store.service";
import {CardHistory, CardInterface} from "../interfaces/card.interface";

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
      this.store._whosePage = Object.values(data)[0].rules
      console.log(Object.values(data)[0].rules)
    });
  }

  public sendOffers(userId: string, peymentList: PeyementList[]){
    return this.http.put<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/offers.json`, peymentList).subscribe(() =>{
      this.getOffers(userId);
    })
  }

  public sendOffersActive(userId: string, peymentList: PeyementList){
    return this.http.post<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/activeOffers.json`, peymentList).subscribe(() =>{
      // this.getOffers(userId);
    })
  }

  public getOffers(userId: string){
    return this.http.get<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/offers.json`).subscribe((data: PeyementList[]) =>{
      this.store._offer = data;
    })
  }

  public sendPeyementList(userId: string, peymentList: PeyementList[]){
    return this.http.put<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/paymentList.json`, peymentList).subscribe(() =>{
      this.getPeyementList(userId);
    })
  }

  public getPeyementList(userId: string){
    return this.http.get<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/paymentList.json`).subscribe((data: PeyementList[]) =>{
      this.store._payementList = data;
    })
  }

  public sendPeyementUsersListToComplete(userId: string, peymentList: PeyementList){
    return this.http.post<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/completePeyment.json`, peymentList).subscribe(() =>{
      this.getPeyementUsersListComplete(userId);
    });
  }

  public getPeyementUsersListComplete(userId: string){
    return this.http.get<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/completePeyment.json`).subscribe((data: PeyementList[]) =>{
      this.store._payemenUserstListComplete = data;
    })
  }

  public sendPeyementUsersList(userId: string, peymentList: PeyementList[]){
    return this.http.put<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/paymentUsersList.json`, peymentList).subscribe(() =>{
      this.getPeyementUsersList(userId);
    })
  }

  public getPeyementUsersList(userId: string){
    return this.http.get<PeyementList[]>( `https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/paymentUsersList.json`).subscribe((data: PeyementList[]) =>{
      this.store._payemenUserstList = data;
    })
  }

  public sendNewUserCard(userId: string, card: CardInterface){
    return this.http.post<CardInterface>(`https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/userCards.json`, card).subscribe(() =>{
      this.getNewUsersCard(userId)
    })
  }

  public getNewUsersCard(userId: string){
    return this.http.get<CardInterface[]>(`https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/userCards.json`).subscribe((data: CardInterface[]) =>{
      this.store._userCards = Object.values(data);
    })
  }

  public getUserCardsHistory(userId: string){
    return this.http.get<CardHistory[]>(`https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/userCardsHistori.json`).subscribe((data: CardHistory[]) =>{
      this.store._userCardsHistory = data;
    })
  }

  public sendNewDataUser(userId: string, newData:UserData){
    return this.http.put<UserData>(`https://smm-oksima-default-rtdb.firebaseio.com/users/${userId}/profile.json`, newData).subscribe((data: UserData) =>{
      this.getUserProfile(userId);
    })
  }

}
