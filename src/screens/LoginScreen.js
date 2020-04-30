import React, {Component, useState} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';

import {loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'


export default function LoginScreen(props) {
    
    const [hidePassword, setHidePassword] = useState(true)

    return(
        <View style={[loginStyles.container, {padding: 50}]} >
            
            <StatusBar backgroundColor={color.BLUE} translucent={true} />
            
            <View style={loginStyles.logo} > 
                <Image source={require('@recursos/images/foodapp.png')}
                style={{ height:150, width:150 }} />
            </View>

            <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user' />
            <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' 
            bolGone={true} secureTextEntry={hidePassword} 
            onPress={ () => setHidePassword(!hidePassword)} /> 

            <View style={loginStyles.btnMain} >
                <TouchableOpacity >
                    <Text style={loginStyles.btntxt} > Iniciar sesión</Text>
                </TouchableOpacity>
            </View>

            <View style={loginStyles.btnTransparent} >
                <TouchableOpacity >
                    <Text style={ [loginStyles.btntxt, { color: color.BLUE } ]} > Registrarse </Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                    <Text style={ [loginStyles.txtTransparent, {textDecorationLine:'underline' }]} > Olvidé contraseña</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    
}