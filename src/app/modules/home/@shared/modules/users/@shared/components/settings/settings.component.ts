import { Component } from '@angular/core';
import { SidebarIconService } from '../../../../../services/sidebarIcon.service';
import { Settings } from '../../interface/settings.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  public headerItems: Settings[] = [
    {
      icon: "document",
      title: "Strona"
    },
    {
      icon: "document",
      title: "Inni"
    },
    {
      icon: "document",
      title: "Indeksy"
    },{
      icon: "document",
      title: "Poczta"
    }
  ]
  constructor(
    private sidebarIcon: SidebarIconService
  ) {}
}
