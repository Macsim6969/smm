import { Component } from '@angular/core';
import {SidebarIconService} from "../../services/sidebarIcon.service";
import {Sidebar} from "../../interface/sidebar.interface";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public headerItems: Sidebar[] = [
    {
      icon: "document",
      title: "Strona",
      route: ""
    },
    {
      icon: "document",
      title: "Inni",
      route: ""
    },
    {
      icon: "document",
      title: "Indeksy",
      route: ""
    },{
      icon: "document",
      title: "Poczta",
      route: ""
    }
  ]
  constructor(
    private sidebarIcon: SidebarIconService
  ) {}
}
