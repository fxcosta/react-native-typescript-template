import {UsersTypes, Userstate, FetchAction} from './types';
import {Reducer} from 'redux';

const initialState: Userstate = {
  data: null,
  loading: false,
  error: false,
};

const reducer: Reducer<Userstate, FetchAction> = (state = initialState, action: FetchAction) => {
  switch (action.type) {
    case UsersTypes.FETCH_SUCCCES:
      return {...state, data: action.payload};
    default:
      return state;
  }
};

export default reducer;
