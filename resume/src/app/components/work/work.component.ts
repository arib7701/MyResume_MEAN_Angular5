import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works: Array<Object>;
  work: Object;
  lang = 'en';

  constructor(private infoService: InformationService) {
    this.infoService.getLang().subscribe(newValue => {
      this.lang = newValue;
    });
  }

  ngOnInit() {
    this.infoService.getWorks().subscribe(
      works => {
        this.works = works.results;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
