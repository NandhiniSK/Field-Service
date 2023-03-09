import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/model/job.model';
import { HomeService } from '../shared/service/home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jobList: Job[] = [];
  countByStatus: KeyValue<string, number> = {} as KeyValue<string,number>;
  countByPerson: KeyValue<string, number> = {} as KeyValue<string,number>;

  constructor(private homeService: HomeService) {
    this.getJob();
  }

  ngOnInit() {}

  getJob() {
    this.homeService.getJob().subscribe((response) => {
      if (response) {
        this.jobList = response as Job[]
        let jobStatus = this.homeService.getJobCountByStatusAndEmp(this.jobList);
        this.countByStatus = jobStatus.count_by_status;
        this.countByPerson = jobStatus.count_by_person;
      }
    });
  }
}
