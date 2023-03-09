import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/model/job.model';
import { HomeService } from '../shared/service/home-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) {
    this.getJob();
  }

  ngOnInit() {}

  getJob() {
    this.homeService.getJob().subscribe((response) => {
      if (response) {
        let jobList = response as Job[];
        this.homeService.getJobCountByStatusAndEmp(jobList);
      }
    });
  }
}
