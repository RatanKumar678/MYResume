import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServicesService {

  // public authenticated = new BehaviorSubject(null);
  dropDownData: BehaviorSubject<any> = new BehaviorSubject(localStorage.getItem('alpha3code'));
  LoaderValue: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
