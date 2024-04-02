import { Component } from '@angular/core';
import {AuthIconsService} from "./@shared/services/authIcons.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  constructor(private authIcon: AuthIconsService) {
  }
}
