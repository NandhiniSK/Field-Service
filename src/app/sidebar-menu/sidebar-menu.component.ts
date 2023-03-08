import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menuList: any[] = [];

  getMenuList(){
    this.menuList = [
      {label: "Home", icon:""},
      {label: "Customers", icon:""},
      {label: "Employee", icon:""},
      {label: "Schedule", icon:""},
      {label: "History", icon:""},
      {label: "Services", icon:""},
      {label: "Invoice", icon:""},
    ]
  }
}