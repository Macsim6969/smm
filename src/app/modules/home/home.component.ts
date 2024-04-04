import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../shared/services/backend.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.initializeUserData();
    this.initializePeymentList();
  }

  private initializeUserData(){
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.backendService.getUserProfile(localId.localId);
  }

  private initializePeymentList(){
    const localId = JSON.parse(localStorage.getItem('userData'));
    this.backendService.getPeyementList(localId.localId);
    this.backendService.getPeyementUsersList(localId.localId);
  }

}
