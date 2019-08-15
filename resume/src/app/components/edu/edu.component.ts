import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  edus: Array<Object>;
  lang = 'en';

  constructor(private infoService: InformationService) {
    this.infoService.getLang().subscribe(newValue => {
      this.lang = newValue;
    });
  }

  ngOnInit() {
    this.infoService.getEdus().subscribe(
      edus => {
        this.edus = edus.results;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
