import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchUserFailure, fetchUserSuccess} from './actions';
import {FetchAction, UsersTypes} from './types';

import JSONPlacholderAPI from '../../../lib/jsonPlaceholderAPI';

function* fetchUser(action: FetchAction) {
  try {
    const user = yield call(JSONPlacholderAPI.fetchUser, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (e) {
    yield put(fetchUserFailure(e.message));
  }
}

export default function* root() {
  yield takeEvery(UsersTypes.FETCH, fetchUser);
}
