import { Component } from '@angular/core';
import {ProfilIconService} from "./services/profilIcon.service";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {
  constructor(private profilIcon: ProfilIconService) {
  }

}
