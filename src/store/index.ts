import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, compose, createStore, Dispatch, MiddlewareAPI} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import {Userstate} from './ducks/users/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  users: Userstate;
}

/*ß
 *--------------------------------------------------*
 * Persist config documentation
 * https://github.com/rt2zz/redux-persist/blob/master/src/types.js#L13-L27
 *--------------------------------------------------*
 */

const config = {
  storage: AsyncStorage,
  key: 'user',
};

const reducers = persistReducer(config, rootReducer);

const appMiddleware = (_store: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  //   var state = store.getState()
  //   switch (action.type) {
  //     case actions.ADD_TASK:
  //       *do something*
  //       break;
  //   }
  next(action);
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, appMiddleware];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(reducers, compose(...enhancers));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

/*
 *--------------------------------------------------*
 * Reset persist store: persistor.purge()
 *--------------------------------------------------*
 */
