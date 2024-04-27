import { Component, Input } from '@angular/core';
import { SidebarIconService } from '../../../../../services/sidebarIcon.service';
import { Settings } from '../../interface/settings.interface';
import { BackendService } from '../../../../../../../../shared/services/backend.service';
import { Users, UsersList } from '../../interface/user.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  @Input() user: UsersList;
  @Input() clicks: number;
  @Input() decommissioned: number;
  @Input() balanc: number;

  public activeId: number | null;
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
    }, {
      icon: "document",
      title: "Poczta"
    }
  ]
  constructor(
    private sidebarIcon: SidebarIconService,
    private backendService: BackendService
  ) { }

  public changeData(id: number) {
    this.activeId = id;
  }

  public save(id: number) {
    if (id === 0) {
      const userDat = { ...this.user }
      userDat.clicks = this.clicks;
      this.sendData(userDat);
    } else if (id === 1) {
      const userDat = { ...this.user }
      userDat.decommissioned = this.decommissioned;
      this.sendData(userDat);
    } else {
      const userDat = { ...this.user }
      userDat.balanc = this.balanc;
      this.sendData(userDat);
    }
  }

  private sendData(userDat) {
    this.backendService.sendUserProfile(userDat).add(() => {
      this.backendService.getAllUsers()
      this.changeData(null)
    })
  }
}
