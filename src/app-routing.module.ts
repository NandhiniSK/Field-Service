import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './app/customer/customer.component';
import { EmployeeComponent } from './app/employee/employee.component';
import { HistoryComponent } from './app/history/history.component';
import { HomeComponent } from './app/home/home.component';
import { InvoiceComponent } from './app/invoice/invoice.component';
import { ScheduleComponent } from './app/schedule/schedule.component';
import { ServiceListComponent } from './app/service-list/service-list.component';

const routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: 'service-list',
    component: ServiceListComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
