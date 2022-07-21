import { createReducer , on} from '@ngrx/store';

import { beersData } from '../data/beer-list';
import { Beerstate } from '../model/state';
import * as Actions from '../actions/actions';

const initialBeerState: Beerstate = { list: beersData };

export const beerReducers = createReducer(initialBeerState,
  
  on(Actions. )
  );

