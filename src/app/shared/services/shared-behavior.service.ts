import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedBehaviorService {
  public clientTableList = new BehaviorSubject<any>(null);
  constructor() {}

  clientTableListUpdate(data: any) {
    this.clientTableList.next(data);
  }
}
