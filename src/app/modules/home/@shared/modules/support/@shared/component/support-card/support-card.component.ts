import {Component, OnInit} from '@angular/core';
import {SupportInterface} from "../../interface/support.interface";
import {SupportService} from "../../services/support.service";
import {SupportIconService} from "../../services/supportIcon.service";

@Component({
  selector: 'app-support-card',
  templateUrl: './support-card.component.html',
  styleUrl: './support-card.component.scss'
})
export class SupportCardComponent implements OnInit{

  public supportCards: SupportInterface[];
  constructor(
    private supportIcon: SupportIconService,
    private supportService: SupportService
  ) {}

  ngOnInit() {
    this.supportCards = this.supportService.supportCards;
  }
}
