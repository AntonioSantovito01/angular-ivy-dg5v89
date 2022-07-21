import { createAction, props } from '@ngrx/store/src/action_creator';
import { Beer } from '../model/model';

export const deleteBeerAction = createAction(
  '[Beer] delete',
  props<{ id: number }>()
);
