import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HistoryComponent } from './history/history.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { ServiceListComponent } from './service-list/service-list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([])],
  declarations: [
    AppComponent,

    CustomerComponent,
    EmployeeComponent,
    HistoryComponent,
    HomeComponent,
    InvoiceComponent,
    SidebarMenuComponent,
    ServiceListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
