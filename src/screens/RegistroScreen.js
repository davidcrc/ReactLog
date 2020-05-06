/**
 * Ventana para el registro
 * 
 */
import React, { useState } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    ActivityIndicator
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
    const [isCheckSelected, setSelection] = useState(false);

    const btn_image_back = require('@recursos/images/back.png')

    // Para almcenar las variables
    const [Name, setName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Email, setEmail] = useState('')
    const [Pass, setPass] = useState('')

    // Para almacenar las variables de rror
    const [strName, setNameError] = useState('*')
    const [strLasName, setLasNameError] = useState('*')
    const [strEmail, setStringError] = useState('*')
    const [strPass, setPassError] = useState('(*)')

    // Variable de registro
    const [strReg, setRegMsg] = useState('')

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

                <MyTextInput placeholder='Nombres' image='user'
                    value={Name} onChangeText={ (name) => handleChangeName(name)} 
                    bolError={true} strError={strName} require 
                />

                <MyTextInput placeholder='Apellidos' image='user' 
                    value={LastName} onChangeText={ (LastName) => handleChangeTLastName(LastName)} 
                    bolError={true} strError={strLasName} require 
                />

                <MyTextInput keyboardType='email-address' placeholder='E-mail' value={Email}
                    image='envelope' 
                    onChangeText={ (email) => handleChangeEmail(email)} 
                    bolError={true} strError={strEmail} require
                />

                <MyTextInput keyboardType={null} placeholder='Contraseña'
                    onPress={() => setHidePassword(!hidePassword)}
                    keyboardType={null}
                    image='lock' bolGone={true}
                    secureTextEntry={hidePassword}
                    value={Pass}
                    bolError={true}
                    strError={strPass}
                    onChangeText={ (pass) => handleChangePass(pass)} 
                />
                
                {/* Checkbox de Terminos y condiciones */}
                <CheckBox
                    containerStyle={registroStyles.checkBox}
                    textStyle={{ color: color.BLUE }}
                    title='He leído y acepto los términos y condiciones'
                    checked={isCheckSelected}
                    onPress={()=>setSelection(!isCheckSelected)}
                    checkedColor={color.BLUE}
                />

                {/* Boton de registro */}
                <View style={isCheckSelected ? mainStyles.btnMain : mainStyles.btnMainDisable }>
                    <TouchableOpacity onPress={() =>
                        registrar(props)}
                        disabled={!isCheckSelected} >
                        <Text style={mainStyles.btntxt}> Registrarse </Text>
                    </TouchableOpacity>

                </View>
                
                {/* Mostrar mensaje de rror  */}
                <Text style={{ color: color.RED }}> {strReg}  </Text>

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
        // VIEW: Aqui hacer la validacion de campos, esten correctos 
        if ( !strName && !strLasName && !strEmail && !strPass  ){
            console.log("todo Ok")
            setRegMsg("todo Ok")

            // return (<ActivityIndicator size="large" color="#0000ff" />)
            setTimeout( () => {
                goToScreen(props, 'Login')
                
                
            }, 800)
        }
        else{
            console.log("algo sucedio")
            setRegMsg("algo sucedio")
            
        }
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


    function handleChangePass(text){
        console.log("in: "+ text)
        setPass(text)

        // 7 a 15 caracteres que contienen al menos un dígito numérico y un carácter especial
        // let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

        // De 6 a 17 caracteres que contienen solo caracteres, dígitos numéricos, guiones bajos y el primer carácter debe ser una letra
        let reg = /^[A-Za-z]\w{5,18}$/;

        if (reg.test(text) === false) {
            console.log("no correct pass");
            setPassError("Debe contener al menos 6 caracteres, la primera mayus .")
            return false;
        }
        else {
            console.log("Pass is correct");
            setPassError("")

        };
    }

    function handleChangeName(txt){
        
        console.log("el txt "+ txt)
        setName(txt) 
        
        if ( txt == "" ) {
            setNameError("Campo requerdio")
            console.log("reqqqq " + txt)
        }
        else{
            setNameError("")
            console.log("ya no reqqqq")

        }

    }

    function handleChangeTLastName(txt){
        
        console.log("el txt "+ txt)
        setLastName(txt) 
        
        if ( txt == "" ) {
            setLasNameError("Campo requerdio")
            console.log("reqqqq " + txt)
        }
        else{
            setLasNameError("")
            console.log("ya no reqqqq")

        }

    }
        
}

