import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Payload, Response } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  getResource<R>(url: string): Observable<Response<R>> {
    return this.httpclient.get<Response<R>>(url);
  }
  postResource<P, R>(
    url: string,
    payload: Payload<P>
  ): Observable<Response<R>> {
    return this.httpclient.post<Response<R>>(url, payload, this.options);
  }
  constructor(private httpclient: HttpClient) {}
}
