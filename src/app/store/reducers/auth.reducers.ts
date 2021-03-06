
import * as fromAuth from '../actions/auth.actions';
import { UsuarioModel } from '../../auth/models/usuario.models';

export interface AuthState {
    user: UsuarioModel;
}

const initState: AuthState = {
    user: null
};

export function authReducer( state = initState , action: fromAuth.actions): AuthState {
    switch (action.type){
        case fromAuth.SET_USER:
            return {
                user: { ... action.user }
            };
        case fromAuth.UNSET_USER:
            return {
                user: null
            }
        default:
            return state;
    }
}