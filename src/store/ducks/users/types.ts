export enum UsersTypes {
  FETCH = 'USER/FETCH',
  FETCH_SUCCCES = 'USER/FETCH_SUCCCES',
  FETCH_FAILURE = 'USER/FETCH_FAILURE',
}

export interface User {
  id?: string;
}

export interface Userstate {
  readonly data: User | null;
  readonly loading: boolean;
  readonly error: boolean;
}

export interface FetchAction {
  type: string;
  payload: any;
}
