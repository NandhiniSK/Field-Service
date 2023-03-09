import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIURL } from '../constant/api-url.const';
import { Job, JobStatus } from '../model/job.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}
  getJob() {
    let url = APIURL.getJob();
    return this.http.get(url, { responseType: 'json' });
  }

  getJobCountByStatusAndEmp(jobList: Job[]) {
    let jobStatus = new JobStatus();
    jobList.forEach((x: Job) => {
      jobStatus.count_by_status[x.status] = jobStatus.count_by_status[x.status]
        ? jobStatus.count_by_status[x.status] + 1
        : 1;
      x.assigned_to.forEach((name) => {
        jobStatus.count_by_person[name] = jobStatus.count_by_person[name]
          ? jobStatus.count_by_person[name] + 1
          : 1;
      });
    });
    console.log(jobStatus);
  }
}
