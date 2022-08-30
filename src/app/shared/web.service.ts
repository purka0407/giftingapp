import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { map,retry,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private httpclient: HttpClient) { }
  getdata():Observable<any>{
    return this.httpclient.get('https://reqres.in/api/products/3').pipe(
      map(res => {
          return res;
      }),
      retry(1),
      );
  }
  // getpostdata(data:any):Observable<any>{
  //   return this.httpclient.post('https://reqres.in/api/products/3',data).pipe(
  //     map(res => {
  //         return res;
  //     }),
  //     retry(1),
  //     );
  // }
}
