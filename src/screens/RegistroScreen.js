/**
 * Ventana para el registro
 * TODO: FALTA LA VALIDACION DE LOS CAMPOS
 */
import React, { useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native'
import { mainStyles, registroStyles } from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import ToolBar from '@components/ToolBar'
import color from '@styles/Colors'
import { CheckBox, SocialIcon, Button } from 'react-native-elements'

function goToScreen(props, routeName) {
    props.navigation.navigate(routeName)
}

export default function RegistroScreen(props) {

    const [hidePassword, setHidePassword] = useState(true)
    const [isSelected, setSelection] = useState(false);

    const btn_image_back = require('@recursos/images/back.png')

    return (
        <ScrollView
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            style={{ backgroundColor: color.WHITE }}>

            <StatusBar backgroundColor={color.BLUE} translucent={true} />

            <ToolBar titulo='Registrarse'
                onPressLeft={() => goToScreen(props, 'Login')}
                iconLeft={ btn_image_back } />

            <View style={[mainStyles.container, { padding: 40 }]}>

                <Text style={mainStyles.titleText}> Crea tu Cuenta</Text>

                <MyTextInput placeholder='Nombres' image='user' />

                <MyTextInput placeholder='Apellidos' image='user' />

                <MyTextInput keyboardType='email-address' placeholder='E-mail'
                    image='envelope' />

                <MyTextInput keyboardType={null} placeholder='Contraseña'
                    onPress={() => setHidePassword(!hidePassword)}
                    keyboardType={null}
                    image='lock' bolGone={true}
                    secureTextEntry={hidePassword}
                />
                
                {/* Checkbox de Terminos y condiciones */}
                <CheckBox
                    containerStyle={registroStyles.checkBox}
                    textStyle={{ color: color.BLUE }}
                    title='He leído y acepto los términos y condiciones'
                    checked={isSelected}
                    onPress={()=>setSelection(!isSelected)}
                    checkedColor={color.BLUE}
                />

                {/* Boton de registro */}
                <View style={mainStyles.btnMain}>
                    <TouchableOpacity onPress={() =>
                        registrar(props) }>
                        <Text style={mainStyles.btntxt}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

                {/* Sugerencia de inicio de sesion, si tienes cuenta */}
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: color.BLUE }}>¿Ya tienes una cuenta? </Text>
                    <Button title="Inicia Sesión" onPress={() => goToScreen(props, 'Login')} type="clear" />
                </View>

                {/* Ejemplo de boton Sociales */}
                <View style={registroStyles.containerSocial}>
                    <SocialIcon
                        style={registroStyles.buttonSocialIcon}
                        title='Registrar con Facebook'
                        button
                        type='facebook'
                        onPress={() => goToScreen(props, 'Login')}
                    />
                    <SocialIcon
                        style={registroStyles.buttonSocialIcon}
                        title='Registrar con Google'
                        button
                        type='google-plus-official'
                        onPress={() => goToScreen(props, 'Login')}
                    />
                </View>

            </View>

        </ScrollView>
    )

    function registrar(){
        // VIEW: Aqui hacer la validacion de campos
        goToScreen(props, 'Login')
    }
}