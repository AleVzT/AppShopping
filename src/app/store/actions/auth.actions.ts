import { Action } from '@ngrx/store';
import { UsuarioModel } from '../../auth/models/usuario.models';


export const SET_USER = '[AUTH] SET USER';
export const UNSET_USER = '[AUTH] UNSET USER';

export class SetUserAction implements Action {
    readonly type = SET_USER;

    constructor( public user: UsuarioModel){}
}

export class UnSetUserAction implements Action {
    readonly type = UNSET_USER;

}

export type actions = SetUserAction | UnSetUserAction ;