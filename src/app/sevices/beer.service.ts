import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable({ providedIn: 'root' })
export class BeerService {
  constructor() {}
  beers: Beer[] = beersData;

  getBeerList() {
    return this.beers;
  }

  deleteBeer(item: Beer) {
    this.beers = this.beers.filter((beer) => beer.id !== item.id);

    console.log(this.beers);
  }
}
