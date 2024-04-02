import { Component } from '@angular/core';
import {AuthIconsService} from "../../services/authIcons.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent {

  constructor(private authIcon: AuthIconsService) {}
}
