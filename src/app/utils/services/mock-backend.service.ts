import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockBackendService {
  private tariffUrl = '../../../assets/mock-data/data.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getTariffList(): Observable<any> {
    return this.httpClient.get(this.tariffUrl);
  }
}
