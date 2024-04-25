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
  public userData: UserData;
  public isEditProfil: boolean
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

  private getDataRulesFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;
    });
  }

  public edit() {
    if (this.rules !== 'afiliat') {
      this.isEditProfil = !this.isEditProfil;
    }
  }

  public save() {
    this.changePassword()
    this.setDataToStore();
    this.isEditProfil = false;
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
    this.rulesSubscription.unsubscribe();
  }

  private getUserDataFromStore() {
    this.userDataSubscription = this.store._userData$.subscribe((data: UserData) => {
      if (Object.keys(data)) {
        this.userData = Object.values(data)[0];
      } else {
        this.userData = data
      }
    })
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
      email: this.email,
      name: this.name,
      password: this.password,
      address: this.address,
      number: this.number
    }
    this.backendService.sendNewDataUser(localId.localId, newUserData);

  }

}
