import { Component, OnInit } from '@angular/core';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(public sidebarservice: SidebarService) {}

  getSideBarSate() {
    return this.sidebarservice.getSidebarState();
  }

  ngOnInit() {}
}
