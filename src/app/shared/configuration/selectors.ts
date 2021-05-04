import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../store/root-reducer';
import { configurationSlice } from './slice';

const getState = (state: RootState) => state[configurationSlice.name];

export const selectLocale = createSelector(
  (state: RootState) => getState(state).locale,
  (locale) => locale,
);
