import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TariffPageComponent } from './tariff-page.component';

describe('TariffListComponent', () => {
  let component: TariffPageComponent;
  let fixture: ComponentFixture<TariffPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TariffPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TariffPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
