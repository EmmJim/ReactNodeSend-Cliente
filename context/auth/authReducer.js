import {
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR, 
    LIMPIAR_ALERTA, 
    LOGIN_ERROR,
    LOGIN_EXITOSO,
    USUARIO_AUTENTICADO,
    CERRAR_SESION
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                token: action.payload,
                autenticado: true
            }
        case LIMPIAR_ALERTA: 
            return {
                ...state,
                mensaje: null
            }
        case USUARIO_AUTENTICADO: 
            return {
                ...state,
                usuario: action.payload
            }
        case CERRAR_SESION: 
            localStorage.removeItem('token');
            return {
                ...state,
                usuario: null,
                token: null,
                autenticado: null
            }
        default: 
            return state; 
    }
}