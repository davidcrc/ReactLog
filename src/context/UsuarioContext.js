import React, {createContext, useReducer} from 'react';
import { saveUsuario, deleteUsuario } from '@storage/UsuarioAsyncStorage'
import Snackbar from 'react-native-snackbar';

// Estado inicial del contexto
const initialState = {
    usuario: {
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    },activo: false
}

const usuarioReducer = (state = initialState, payload) => {

    switch(payload.type){
        
        // Usuario ya logueado
        case 'sig-in':
            console.log('')
            return { ...state, usuario: payload.data, activo: true }

        // Usuario se va a loguear
        case 'sign':
            saveUsuario(payload.data).then((msg) =>  {
                console.log('usuario guardado')
            })
            Snackbar.show({
                title: 'Inicio de sesion exitoso',
                duration: Snackbar.LENGTH_LONG
            })
            return { ...state, usuario: payload.data, activo: true }
            
        // Usuario cierra sesion
        case 'sign-out':
            deleteUsuario().then((msg) =>  {
                console.log('usuario eliminado')
            })
            Snackbar.show({
                title: 'Sesión expirada',
                duration: Snackbar.LENGTH_LONG
            })
            return { ...state, usuario: payload.data, activo: false }

        default:
            return state

    }
}

const UsuarioContext = createContext(initialState)

function UsuarioProvider(props){
    
    const [login, loginAction] = useReducer(usuarioReducer , initialState)

    return(
        <UsuarioContext.Provider value={{login, loginAction}}>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext, UsuarioProvider}