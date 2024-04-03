import { Component } from '@angular/core';
import {SidebarIconService} from "../../services/sidebarIcon.service";
import {Sidebar} from "../../interface/sidebar.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent {

  public sidebarItem: Sidebar[] = [
    {
      icon: "manager",
      title: "Menedżer",
      route: "/manager"
    },
    {
      icon: "users",
      title: "Użytkownicy",
      route: "/users"
    },
    {
      icon: "offers",
      title: "Oferuje",
      route: "/offers"
    },
    {
      icon: "profil",
      title: "Profil",
      route: "/profil"
    },
    {
      icon: "oscillate",
      title: "Balansować",
      route: "/oscillate"
    },
    {
      icon: "support",
      title: "Pomoc techniczna",
      route: "/support"
    }
  ]
  constructor(
    private sidebarIcon: SidebarIconService
  ) {}
}
