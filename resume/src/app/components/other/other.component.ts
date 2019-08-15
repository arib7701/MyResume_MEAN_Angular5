import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {
  others: Array<Object>;

  constructor(private infoService: InformationService) {}

  ngOnInit() {
    this.infoService.getOthers().subscribe(
      others => {
        this.others = others.results;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
