import { Injectable } from '@angular/core';
import { ITariff } from '../interfaces/tariff-page.interfaces';
import { getTariffListMapper } from '../functions/tariff-list.functions';
import { MockBackendService } from './mock-backend.service';
import { map, pluck, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { SortingDirections, SortTypesEnum, TypeSortDirection } from '../constants/global.const';

@Injectable({
  providedIn: 'root'
})
export class TariffDataStoreService {
  private tariffList$ = new BehaviorSubject<ITariff[]>([]);

  constructor(
    private mockBackendService: MockBackendService
  ) { }

  public get tariffList(): Observable<ITariff[]> {
    return this.tariffList$.asObservable();
  }

  public setUpTariffList(): Observable<ITariff[]> {
    return this.mockBackendService.getTariffList()
      .pipe(
        pluck('offers'),
        map((offers) => getTariffListMapper(offers)),
        tap((tariffList) => this.tariffList$.next(tariffList))
      );
  }

  public sortTariffList(sortType: SortTypesEnum) {
    const TARIFF_LIST_SORTING_FUNCTIONS = {
      [SortTypesEnum.DOWNLOAD_SPEED]: () => this.getSortedTariffList('downloadSpeed', SortingDirections.Up),
      [SortTypesEnum.UPLOAD_SPEED]: () => this.getSortedTariffList('uploadSpeed', SortingDirections.Up),
      [SortTypesEnum.PRICE_UP]: () => this.getSortedTariffList('price', SortingDirections.Up),
      [SortTypesEnum.PRICE_DOWN]: () => this.getSortedTariffList('price', SortingDirections.Down),
    };

    this.tariffList$.next(TARIFF_LIST_SORTING_FUNCTIONS[sortType]());
  }

  private get tariffListValue(): ITariff[] {
    return this.tariffList$.getValue();
  }

  private getSortedTariffList(sortingKey: string, direction: TypeSortDirection): ITariff[] {
    const sortingCbs = {
      asc: (firstItem, secondItem) => secondItem[sortingKey] - firstItem[sortingKey],
      desc: (firstItem, secondItem) => firstItem[sortingKey] - secondItem[sortingKey]
    };

    return [...this.tariffListValue].sort(sortingCbs[direction]);
  }
}
