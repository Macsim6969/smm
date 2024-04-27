import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StoreService } from "../../services/store.service";
import { UserData } from "../../interfaces/backend.interface";
import { Subscription } from "rxjs";
import { AuthService } from "../../../modules/auth/@shared/services/auth.service";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  private rules: 'manager' | 'brand' | 'afiliat';
  public userData: UserData | any;
  public isEditProfil: boolean = false;
  public email: string;
  public password: string;
  public name: string;
  public address: string;
  public number: string;
  private userDataSubscription: Subscription;
  private rulesSubscription: Subscription;

  constructor(
    private store: StoreService,
    private authService: AuthService,
    private backendService: BackendService
  ) {
  }

  ngOnInit() {
    this.getUserDataFromStore();
    this.getDataRulesFromStore();
  }

  private getUserDataFromStore() {
    this.userDataSubscription = this.store._userData$.subscribe((data: UserData) => {
      const keysCount = Object.keys(data).length;
      if (keysCount === 1) {
        this.userData = Object.values(data);
      } else {

        this.userData = data;
      }
    });
  }


  private getDataRulesFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;
    });
  }

  public edit() {
    if (this.rules !== 'afiliat') {
      this.isEditProfil = !this.isEditProfil;
    }

    this.name = this.userData.name;
    this.email = this.userData.email;
    this.password = this.userData.password;
    this.address = this.userData.address;
    this.number = this.userData.number;
  }

  public save() {
    if (this.isEditProfil) {
      if (this.userData.password !== this.password) {
        this.changePassword()
      }
      this.setDataToStore();
      this.isEditProfil = false;
    }
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }


  private changePassword() {
    this.authService.resetPassword(this.email, this.password).subscribe(
      response => {
        console.log('Password changed successfully', response);
      },
      error => {
        console.error('Error changing password:', error);
      }
    );
  }

  private setDataToStore() {
    const localId = JSON.parse(localStorage.getItem('userData'));
    const newUserData: UserData = {
      ...this.userData,
      userID: this.userData.userID,
      email: this.email,
      name: this.name,
      password: this.password,
      address: this.address,
      number: this.number,
      rules: this.store._whosePage
    }
    this.backendService.sendNewDataUser(localId.localId, newUserData);

  }

}
