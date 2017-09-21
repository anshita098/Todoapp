/* eslint import/no-extraneous-dependencies: "warn" */

import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';


   /**
   *
   *@param{string} initialState :
   */
export default function (initialState) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default),
    );
  }

  return store;
}
