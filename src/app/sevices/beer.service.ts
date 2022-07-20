import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';

@Injectable({ providedIn: 'root' })
export class BeerService {
  constructor() {}
  beers: Beer[] = beersData;

  getBeerList() {
    return beersData;
  }

  deleteBeer() {
    return this.beers;
  }
}
