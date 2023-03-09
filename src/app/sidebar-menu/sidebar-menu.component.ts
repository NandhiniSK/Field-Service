import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css'],
})
export class SidebarMenuComponent implements OnInit {
  activeMenuBar: string = '';

  constructor(public router: Router) {
    let urlPath = this.router?.url?.split('/');
    if (urlPath && urlPath.length > 3) this.activeMenuBar = urlPath[4];
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
