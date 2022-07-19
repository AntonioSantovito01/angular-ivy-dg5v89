export type BeerStyle =
  | 'Ale'
  | 'Gose'
  | 'Ipa'
  | 'Lager'
  | 'Pilsner'
  | 'Heat'
  | 'Saison';

export interface Beer {
  id: number;
  beerName: string;
  berrStyle: BeerStyle;
  upc: string;
  price: number;
  createDate: Date;
  lastModifiedDate: Date;
}
