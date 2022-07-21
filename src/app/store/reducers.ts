import { createReducer, on } from '@ngrx/store';

import { beersData } from '../data/beer-list';
import { Beerstate } from '../model/state';
import * as Actions from '../actions/actions';

const initialBeerState: Beerstate = { list: beersData };

export const beerReducers = createReducer(
  initialBeerState,
  on(Actions.deleteBeerAction, (state: Beerstate, arg: { id: number }) => ({
    ...state,
    list: state.list.filter((beer) => arg.id !== beer.id)
  }))
);
