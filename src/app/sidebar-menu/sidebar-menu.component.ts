import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  constructor() {
    this.getMenuList();
  }

  ngOnInit() {}

  menuList: any[] = [];

  getMenuList() {
    this.menuList = [
      { label: 'Home', icon: 'home', routeLink: 'home' },
      { label: 'Customers', icon: 'person', routeLink: 'customer' },
      { label: 'Employee', icon: 'group', routeLink: 'employee' },
      { label: 'Schedule', icon: 'event', routeLink: 'schedule' },
      { label: 'History', icon: 'history', routeLink: 'history' },
      { label: 'Services', icon: 'engineering', routeLink: 'service-list' },
      { label: 'Invoice', icon: 'description', routeLink: 'invoice' },
    ];
  }
}
