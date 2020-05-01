/**
 * Context de react native
 * utilizado para poder almacenar varibales que no sean muy cambiantes
 */
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
    },
    activo: false
}

const usuarioReducer = (state = initialState, payload) => {

    switch(payload.type){
        
        // Usuario ya logueado
        case 'sing-in':
            console.log('Bienvenido usuario')
            return { ...state, usuario: payload.data, activo: true }

        // Usuario se va a loguear
        case 'sign':
            // Aqui deberia colocar el API para saber si se pudo loguear o not

            saveUsuario(payload.data).then((msg) =>  {
                console.log('usuario guardado')
            })
            Snackbar.show({
                text: 'Inicio de sesion exitoso',
                duration: Snackbar.LENGTH_LONG
            })
            return { ...state, usuario: payload.data, activo: true }
            
        // Usuario cierra sesion
        case 'sign-out':
            deleteUsuario().then((msg) =>  {
                console.log(msg)
            })
            Snackbar.show({
                text: 'Sesión expirada',
                duration: Snackbar.LENGTH_LONG
            })
            return { ...state, usuario: payload.data, activo: false }

        default:
            return state

    }
}

const UsuarioContext = createContext(initialState)

/**
 * permite que los componentes que lo consumen se suscriban a los cambios del contexto.
 * @param {*} props 
 */
function UsuarioProvider(props){
    
    const [login, loginAction] = useReducer(usuarioReducer , initialState)

    return(
        <UsuarioContext.Provider value={ [login, loginAction] }>
            {props.children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext, UsuarioProvider}