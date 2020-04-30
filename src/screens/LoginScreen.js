import React, {Component, useState} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';

import {mainStyles, loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import color from '@styles/Colors'

import { ScrollView } from 'react-native-gesture-handler';

function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
}

export default function LoginScreen(props){

    const [hidePassword, setHidePassword] = useState(true)

    return(
        <ScrollView 
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            showsVerticalScrollIndicator={false}
             >
            <View style={[mainStyles.container, {padding: 50}]}>
                <StatusBar backgroundColor={color.BLUE} translucent={true}/>
                <View style={loginStyles.logo}>
                    <Image source={require('@recursos/images/foodapp.png')}
                    style={{ height:150, width:150}}/>    
                </View>
                <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
                secureTextEntry={hidePassword}
                onPress={() => setHidePassword(!hidePassword)}/>
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={ mainStyles.btntxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.btnTransparent}>
                    <TouchableOpacity onPress={() => goToScreen(props, 'Registro')}>
                        <Text style={ [mainStyles.btntxt, { color: color.BLUE}]}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => goToScreen(props, 'RecuperarPassword')}>
                        <Text style={ [mainStyles.txtTransparent, { textDecorationLine: 'underline'}]}>Olvide mi Contraseña</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}