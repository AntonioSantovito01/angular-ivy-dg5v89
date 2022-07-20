import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable({ providedIn: 'root' })
export class BeerService {
  constructor() {}
  private beers: Beer[] = beersData;

  getBeerList() {
    return this.beers;
  }

  deleteBeer(index) {
    this.beers = this.beers.splice(index, 1);
  }
}
