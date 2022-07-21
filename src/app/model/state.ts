import { Beer } from './model';

export interface AppState {
  beerState: Beerstate;
}

export interface Beerstate {
  list: Beer[];
}
