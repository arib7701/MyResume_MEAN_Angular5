import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private infoService: InformationService
  ) {}

  ngOnInit() {}

  changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.infoService.setLang(lang);
  }
}
