export interface ITariff {
  name: string;
  uploadSpeed: number;
  uploadSpeedUnit: string;
  downloadSpeed: number;
  downloadSpeedUnit: string;
  price: number;
  priceText: string;
  benefitsCaptions: string[];
}
