import { ITariff } from '../interfaces/tariff-page.interfaces';

export const getTariffName = ({ product: { content: { text } } }) => text;
export const getTariffUploadSpeed = ({ contractTerm: { uploadSpeed: { amount } } }) => amount;
export const getTariffUploadSpeedUnit = ({ contractTerm: { uploadSpeed: { unit } } }) => unit;
export const getTariffDownloadSpeed = ({ contractTerm: { downloadSpeed: { amount } } }) => amount;
export const getTariffDownloadSpeedUnit = ({ contractTerm: { downloadSpeed: { unit } } }) => unit;
export const getTariffPrice = ({ cost: { effectiveCost: { amount } } }) => amount;
export const getTariffPriceText = ({ cost: { effectiveCost: { content: { text } } } }) => text;
export const getTariffBenefitsCaptions = ({ remarks }) => remarks.map(({ caption: { text } }) => text);

export const getTariffListMapper = (tariffList): ITariff[] => tariffList.map((tariffItem) => ({
  name: getTariffName(tariffItem),
  uploadSpeed: Number(getTariffUploadSpeed(tariffItem)),
  uploadSpeedUnit: getTariffUploadSpeedUnit(tariffItem),
  downloadSpeed: Number(getTariffDownloadSpeed(tariffItem)),
  downloadSpeedUnit: getTariffDownloadSpeedUnit(tariffItem),
  price: Number(getTariffPrice(tariffItem)),
  priceText: getTariffPriceText(tariffItem),
  benefitsCaptions: getTariffBenefitsCaptions(tariffItem)
}));
