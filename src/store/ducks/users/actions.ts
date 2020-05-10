import {UsersTypes, User} from './types';
import {action} from 'typesafe-actions';

export const fetchUser = (payload: string) => action(UsersTypes.FETCH, payload);

export const fetchUserSuccess = (payload: User) => action(UsersTypes.FETCH_SUCCCES, payload);

export const fetchUserFailure = (payload: string) => action(UsersTypes.FETCH_FAILURE, payload);
