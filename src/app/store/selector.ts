import { createSelector } from '@ngrx/store';
import { AppState, Beerstate } from '../model/state';

const beerStateFunction = (state: AppState) => state.beerState;

export const beerSelectors = createSelector(
  beerStateFunction,
  (beerState: Beerstate) => beerState.list
);
