import { createAction, props } from '@ngrx/store';

export const deleteBeerAction = createAction(
  '[Beer] delete',
  props<{ id: number }>()
);
