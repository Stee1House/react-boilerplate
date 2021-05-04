import { createAction, createSlice } from '@reduxjs/toolkit';

import { ConfigurationState } from './types';

const initialState: ConfigurationState = {
  locale: 'en',
};

export const setLocale = createAction<string>('configuration/setLocale');

export const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLocale, (state, { payload }) => {
      state.locale = payload;
    });
  },
});
