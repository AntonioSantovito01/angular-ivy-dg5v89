import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { beerSelectors } from '../store/selector';

@Injectable({ providedIn: 'root' })
export class BeerService {
  constructor(private store: Store) {}
  beers: Beer[] = beersData;

  getBeerList(): Observable<Beer[]> {
    return this.store.select(beerSelectors);
  }

  deleteBeer(item: Beer) {
    this.beers = this.beers.filter((beer) => beer.id !== item.id);
    console.log(this.beers);
  }

  generateId() {
    const maxId = Math.max(...this.beers.map((beer) => beer.id));
    return maxId + 1;
  }
  addBeer(beer: Beer) {
    this.beers.push(beer);
  }
}
