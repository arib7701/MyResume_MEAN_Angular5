import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { TranslateService } from 'ng2-translate';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class InformationService {
  lang: Subject<string> = new Subject();

  constructor(private http: Http, private translate: TranslateService) {}

  getLang(): Observable<string> {
    return this.lang.asObservable();
  }

  setLang(value: string): void {
    this.lang.next(value);
  }

  getEdus() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('edus', { headers: headers }).map(res => res.json());
  }

  getWorks() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('works/', { headers: headers }).map(res => res.json());
  }

  getWork(id) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .get('works/' + id, { headers: headers })
      .map(res => res.json());
  }

  getSkills() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('skills', { headers: headers }).map(res => res.json());
  }

  getOthers() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('others', { headers: headers }).map(res => res.json());
  }

  sendEmail(message) {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http
      .post('contactform', message, { headers: headers })
      .map(res => res.json());
  }
}
