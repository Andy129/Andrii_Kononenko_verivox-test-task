import { Component } from '@angular/core';
import { TariffDataStoreService } from '../../../../utils/services/tariff-data-store.service';
import { SortTypesEnum } from '../../../../utils/constants/global.const';

@Component({
  selector: 'app-sort-panel',
  templateUrl: './sort-panel.component.html',
  styleUrls: ['./sort-panel.component.scss']
})
export class SortPanelComponent {
  public sortTypes = SortTypesEnum;
  public isActive: SortTypesEnum;

  constructor(
    private tariffDataStoreService: TariffDataStoreService
  ) { }

  public sort(sortType: SortTypesEnum): void {
    this.tariffDataStoreService.sortTariffList(sortType);
    this.isActive = sortType;
  }
}
