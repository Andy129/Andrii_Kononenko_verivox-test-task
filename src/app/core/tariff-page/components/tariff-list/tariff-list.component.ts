import { Component, OnInit } from '@angular/core';
import { ITariff } from '../../../../utils/interfaces/tariff-page.interfaces';
import { TariffDataStoreService } from '../../../../utils/services/tariff-data-store.service';
import { Observable } from 'rxjs';
import { UtilsService } from '../../../../utils/services/utils.service';

@Component({
  selector: 'app-tariff-list',
  templateUrl: './tariff-list.component.html',
  styleUrls: ['./tariff-list.component.scss']
})
export class TariffListComponent implements OnInit {
  public tariffList$: Observable<ITariff[]>;

  constructor(
    public utilsService: UtilsService,
    private tariffDataStoreService: TariffDataStoreService
  ) { }

  public ngOnInit(): void {
    this.tariffList$ = this.tariffDataStoreService.tariffList;
  }
}
