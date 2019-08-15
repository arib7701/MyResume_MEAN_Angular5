import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SafepipePipe } from '../../services/safepipe.pipe';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
  id: String;
  work: Object;

  constructor(
    private infoService: InformationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.infoService.getWork(this.id).subscribe(
      work => {
        this.work = work.result;
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
