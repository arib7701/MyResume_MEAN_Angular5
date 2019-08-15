import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InformationService } from './services/information.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private translate: TranslateService,
    private infoService: InformationService
  ) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    // Get language of browser
    const browserlang = translate.getBrowserLang();
    translate.use(browserlang.match(/en|fr/) ? browserlang : 'en');
    this.infoService.setLang('en');
  }
}
