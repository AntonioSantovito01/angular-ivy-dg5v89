import { createReducer } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { Beerstate } from '../model/state';

const initialBeerState: Beerstate = { list: beersData };

export const beerReducers = createReducer(initialBeerState);
