import { createStore } from 'redux';

import navbarReducer from '../reducers/navbar_reducers';

export default function configureStore(initialState) {
  const store = createStore(navbarReducer, initialState);
  return store;
}