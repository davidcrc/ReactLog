/**
 * 
 */
import React, { useContext, useEffect } from 'react';
import { View, StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable'
import {splashStyles} from '@styles/styles'

import {getUsuario} from '@storage/UsuarioAsyncStorage'
import {UsuarioContext} from '@context/UsuarioContext'

export default function SplashScreen(props) {

    const logo_splash = require('@recursos/images/foodapp.png')
    const [login, loginAction] = useContext(UsuarioContext)

    // Este hook verifica, una sola vez (componentDidMount)
    // si existe la sesion o no
    useEffect(() => {
        fetchSesion(loginAction)
    }, [])

   
    return(
        <View style={splashStyles.image} >
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />

            {/* Un logo pulsante que forma el splash */}
            <Animatable.Image 
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                    width:  200,
                    height: 200,
                    margin: 100,
                }}
                source={ logo_splash }
            />

        </View>
    )

    /**
     * Aqui se verifica si existe o no una sesion
     */
    async function fetchSesion(loginAction){

        const response = await getUsuario()

        console.log(response)

        if(response == null){
            setTimeout( () => {
                goToScreen('Login')
            }, 2500)
            return
        }

        loginAction( {type: 'sing-in', data: response} )

        setTimeout( () => {
            goToScreen('Principal')
        }, 600)
    }

    /**
     * Redirige a la pantalla pasada en routName
     */
    function goToScreen(routeName){
        props.navigation.replace(routeName)
    }
    

}