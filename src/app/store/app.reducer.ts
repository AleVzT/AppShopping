import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from './reducers/auth.reducers';

export interface AppState{
    auth: fromAuth.AuthState;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
}