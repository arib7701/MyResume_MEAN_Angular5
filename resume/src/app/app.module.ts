import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  TranslateModule,
  TranslateLoader,
  TranslateStaticLoader
} from 'ng2-translate';

import { InformationService } from './services/information.service';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import 'hammerjs';

import {
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatDividerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WorkComponent } from './components/work/work.component';
import { EduComponent } from './components/edu/edu.component';
import { SkillComponent } from './components/skill/skill.component';
import { OtherComponent } from './components/other/other.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { WorkDetailComponent } from './components/work-detail/work-detail.component';
import { SafepipePipe } from './services/safepipe.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'works', component: WorkComponent },
  { path: 'works/:id', component: WorkDetailComponent },
  { path: 'edus', component: EduComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'others', component: OtherComponent },
  { path: 'contacts', component: ContactComponent }
];

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WorkComponent,
    EduComponent,
    SkillComponent,
    OtherComponent,
    ContactComponent,
    HomeComponent,
    WorkDetailComponent,
    SafepipePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [Http]
    })
  ],
  providers: [InformationService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
