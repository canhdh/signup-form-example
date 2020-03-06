import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject({username: null, password: null});
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(data: {username, password}) {
    this.dataSource.next(data);
  }
}
