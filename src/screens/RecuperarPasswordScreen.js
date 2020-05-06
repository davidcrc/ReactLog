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
    const [strEmail, setStringError] = useState('(*)')

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
                    value={email} onChangeText={ (email) => handleChangeEmail(email)}
                    bolError={true} strError={strEmail} require
                />
                
                <View style={!strEmail ? mainStyles.btnMain : mainStyles.btnMainDisable }>
                    <TouchableOpacity onPress={ () => recuperarPassword(props) } disabled={strEmail} >
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

    function handleChangeEmail(email){
        
        console.log('et email: '+ email )
        setEmail(email)
        
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email) === false) {
            // console.log();
            setStringError("Ingrese un email valido.")
            return false;
        }
        else {
            console.log("Email is correct");
            setStringError("")

        }
    }
}