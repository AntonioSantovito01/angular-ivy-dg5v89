import { createReducer, on } from '@ngrx/store';

import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { Beerstate } from '../model/state';
import * as Actions from '../store/actions';

const initialBeerState: Beerstate = { list: beersData };

export const beerReducers = createReducer(
  initialBeerState,
  on(Actions.deleteBeerAction, (state: Beerstate, arg: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => arg.id !== beer.id),
  })),
  on(Actions.addBeerAction, (state: Beerstate, arg: { beer: Beer }) => {
    return {
      ...state,
      list: [...state.list, arg.beer],
    };
  })
);
