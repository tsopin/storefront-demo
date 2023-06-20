import {combineReducers} from '@reduxjs/toolkit';
import {reducer} from './slices';

export const rootReducer = combineReducers({
  cart: reducer,
});
