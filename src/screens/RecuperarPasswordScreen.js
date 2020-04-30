import React, {Component, useState} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';

import {mainStyles, loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import color from '@styles/Colors'


import { ScrollView } from 'react-native-gesture-handler';

function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
}

export default function RecuperarPasswordScreen(props){

    return(

        <ScrollView 
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={ { backgroundColor: color.WHITE } } >

            <StatusBar backgroundColor={color.BLUE} translucent={true}/>
            
            {/* Coloca una toolbar  */}
            <ToolBar titulo="Contraseña"
            onPressLeft={ () => goToScreen(props, 'Login') }
            iconLeft={ require('@recursos/images/back.png') } />
            
            <View style={[mainStyles.container, {padding: 50}]}>
                
                <Text style={ mainStyles.titleText}>Recuperar contraseña</Text>
                
                <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'/>
                
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={ () => goToScreen(props, 'Login' ) } >
                        <Text style={ mainStyles.btntxt}>Recuperar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </ScrollView>
    )
}