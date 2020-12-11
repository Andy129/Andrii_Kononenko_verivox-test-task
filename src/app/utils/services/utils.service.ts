import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public trackByIndex(index: number): number {
    return index;
  }
}
