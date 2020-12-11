import { Component, OnInit } from '@angular/core';
import { TariffDataStoreService } from '../../utils/services/tariff-data-store.service';

@Component({
  selector: 'app-tariff-page',
  templateUrl: './tariff-page.component.html',
  styleUrls: ['./tariff-page.component.scss']
})
export class TariffPageComponent implements OnInit {

  constructor(
    private tariffDataStoreService: TariffDataStoreService
  ) { }

  public ngOnInit(): void {
    this.setUpTariffListData();
  }

  private setUpTariffListData(): void {
    this.tariffDataStoreService.setUpTariffList().subscribe();
  }
}
