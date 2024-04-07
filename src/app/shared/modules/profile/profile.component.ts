import {Component, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../services/store.service";
import {UserData} from "../../interfaces/backend.interface";
import {Subscription} from "rxjs";
import {AuthService} from "../../../modules/auth/@shared/services/auth.service";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  public userData: UserData;
  public isEditProfil: boolean
  public email: string;
  public password: string;
  public name: string;
  public address: string;
  public number: string;
  private userDataSubscription: Subscription;

  constructor(
    private store: StoreService,
    private authService: AuthService,
    private backendService: BackendService
  ) {
  }

  ngOnInit() {
    this.getUserDataFromStore();
  }

  public edit() {
    this.isEditProfil = !this.isEditProfil;
  }

  public save() {
    this.changePassword()
    this.setDataToStore();
    this.isEditProfil = false;
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }

  private getUserDataFromStore() {

    this.userDataSubscription = this.store._userData$.subscribe((data: UserData) => {
      data ? this.userData = data : null;
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
