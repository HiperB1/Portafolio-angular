import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Api {
  private URL_API = 'http://localhost:1214/enviar'

  constructor(private http: HttpClient) {
  }

  public getData(): Observable<any> {
    return this.http.get<any>(this.URL_API);
  }
  public postData(data: any): Observable<any> {
    return this.http.post<any>(this.URL_API, data);
  }
}
