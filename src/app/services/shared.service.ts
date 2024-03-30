import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private searchDataSubject = new BehaviorSubject<string>('');
  searchData$ = this.searchDataSubject.asObservable(); // Observable for subscribers

  // searchData: string = '';

  // sendData(data:string){
  //   this.searchData= data;
  // }

  // getData(){
  //   return this.searchData;
  // }

  sendData(data: string) {
    this.searchDataSubject.next(data);
  }

  getData() {
    return this.searchDataSubject.value; // Get the current value
  }
}
