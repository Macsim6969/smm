import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarIconService } from "../../services/sidebarIcon.service";
import { Sidebar } from "../../interface/sidebar.interface";
import { StoreService } from '../../../../../shared/services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit, OnDestroy {

  public rules: 'manager' | 'brand' | 'afiliat';
  private rulesSubscription: Subscription;
  public sidebarItem: Sidebar[] = [
    {
      icon: "manager",
      title: "Menedżer",
      route: "/manager",
      alt: "manager-page"
    },
    {
      icon: "group",
      title: "Marka",
      route: "/marka",
      alt: "marka"
    },
    {
      icon: "group",
      title: "Przyłączać",
      route: "/affiliate",
      alt: "affiliate"
    },

    {
      icon: "offers",
      title: "Oferty w przygotowaniu",
      route: "/added-processing",
      alt: "added-processing"
    },
    {
      icon: "users",
      title: "Użytkownicy",
      route: "/users",
      alt: "users"
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
    private sidebarIcon: SidebarIconService,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.getDataRulesFromStore();
  }

  private getDataRulesFromStore() {
    this.rulesSubscription = this.store._whosePage$.subscribe((data) => {
      this.rules = data;
    });
  }

  ngOnDestroy(): void {
    this.rulesSubscription.unsubscribe();
  }
}
