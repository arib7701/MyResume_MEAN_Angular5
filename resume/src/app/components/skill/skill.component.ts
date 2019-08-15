import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Array<Object>;
  readonly = true;

  constructor(
    private infoService: InformationService,
    config: NgbRatingConfig
  ) {
    config.max = 5;
  }

  ngOnInit() {
    this.infoService.getSkills().subscribe(
      skills => {
        this.skills = skills.results;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
