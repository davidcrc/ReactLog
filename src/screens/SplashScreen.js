import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

import * as Animatable from 'react-native-animatable'
import {imageBackgroundStyle} from '@styles/General'

export default class SplashScreen extends Component {

    /**
     * Redirige a la pantalla pasada en routName
     */
    goToScreen(routeName){
        this.props.navigation.navigate(routeName)
    }

    /**
     * 
     */
    componentDidMount(){
        setTimeout( () => {
            this.goToScreen('Login')
        }, 3000, this )
    }

    render(){
        return(
            <View style={imageBackgroundStyle.splash} >
                <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' />

                <Animatable.Image 
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    style={{
                        width:  200,
                        height: 200,
                        margin: 100,
                    }}
                    source={ require('@recursos/images/foodapp.png') }
                />

            </View>
        )
    }

}