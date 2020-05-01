import React, {useState} from 'react';
import { Text, View, StatusBar, TouchableOpacity, Alert } from 'react-native';

import {mainStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import color from '@styles/Colors'


import { ScrollView } from 'react-native-gesture-handler';

function goToScreen(props, routeName){
    props.navigation.navigate(routeName)
}

export default function RecuperarPasswordScreen(props){

    const [email, setEmail] = useState('')
    const btn_image_back = require('@recursos/images/back.png')

    return(

        <ScrollView 
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={ { backgroundColor: color.WHITE } } >

            <StatusBar backgroundColor={color.BLUE} translucent={true}/>
            
            {/* Coloca una toolbar  */}
            <ToolBar titulo="Contraseña"
            onPressLeft={ () => goToScreen(props, 'Login') }
            iconLeft={ btn_image_back } />
            
            <View style={[mainStyles.container, {padding: 30}]}>
                
                <Text style={ mainStyles.titleText}>Recuperar contraseña</Text>
                
                <MyTextInput keyboardType='email-address' placeholder='E-mail' image='envelope'
                    value={email} onChangeText={ (email) => setEmail(email)}
                />
                
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={ () => recuperarPassword(props) } >
                        <Text style={ mainStyles.btntxt}>Recuperar</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </ScrollView>
    )

    /** 
     * enviara un correo si se encuentra registrado
     * @param {*} props 
     */
    function recuperarPassword(props){
        // TODO: Falta la validacion del campo e-mail
        // console.log("recuperar "+ email)
        Alert.alert(
            "Recuperación",
            "Si ud. se encuentra registrado, un correo ha sido enviado a "+ email + ', para su verificación.',
            [
                {
                    text: "Ok", onPress: () => {

                        goToScreen(props, 'Login' )
                    }
                },
            ]
        )

    }
}