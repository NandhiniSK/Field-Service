this.baseURL = './';
export let APIURL = {
  getJob: function () {
    return this.baseURL + 'assets/job.json';
  },
  getCustomers: function () {
    return this.baseURL + 'assets/customer.json';
  },
  getEmployee: function () {
    return this.baseURL + 'assets/employee.json';
  },
  getSchedule: function () {
    return this.baseURL + 'assets/schedule.json';
  },
  getServices: function () {
    return this.baseURL + 'assets/service.json';
  },
  getHistory: function () {
    return this.baseURL + 'assets/history.json';
  },
  getInvoices: function () {
    return this.baseURL + 'assets/invoice.json';
  },
};
