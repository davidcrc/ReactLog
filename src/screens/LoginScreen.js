/**
 * Ventana para el login
 * 
 */
import React, {useState, useContext} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, Alert } from 'react-native';

import {mainStyles, loginStyles} from '@styles/styles'
import MyTextInput from '@components/MyTextInput'
import MyButton from '@components/MyButton'
import color from '@styles/Colors'
import {UsuarioContext} from '@context/UsuarioContext'

import { ScrollView } from 'react-native-gesture-handler';

// function goToScreen(props, routeName){
//     props.navigation.navigate(routeName)
// }

export default function LoginScreen(props){

    // VARIABLES PARA EL CONTEXT USADAS EN LA SESION
    const [login, loginAction] = useContext(UsuarioContext)

    // ESTAS VARIABLES SON LAS QUE INICIALIZAN EL CONTEXT DEL USUARIO
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nombre, setNombre] = useState()      //TODO: Esta variable no deberia enviarse

    // variables utilizadas para decir si 
    // el icon password esta oculto o visible (default oculto)
    const [hidePassword, setHidePassword] = useState(true)

    const logo = require('@recursos/images/foodapp.png')

    // Variables de error
    const [strEmail, setStringError] = useState()
    const [strPass, setPassError] = useState()
    const [confirm, setConfirm] = useState(false)



    return(
        <ScrollView 
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps='always'
            showsVerticalScrollIndicator={false}
             >

            <View style={[mainStyles.container, {padding: 50}]}>
                
                {/* El colo de la barra de estado para esta vista */}
                <StatusBar backgroundColor={color.BLUE} translucent={true}/>

                {/* Aqui el logo */}
                <View style={loginStyles.logo}>
                    <Image source={ logo }
                    style={ loginStyles.logo_image }/>    
                </View>

                {/* Input para el E-mail */}
                <MyTextInput keyboardType='email-address' placeholder='E-mail' image='user'
                    value={email} onChangeText={ (email) => handleChangeEmail(email) } 
                    bolError={true} strError={strEmail} require
                />

                {/* Input para la contraseña (bolError aun no valida los datos!!!) */}
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
                    secureTextEntry={hidePassword} bolError={true}
                    onPress={() => setHidePassword(!hidePassword)}
                    value={password} onChangeText={ (password) => handleChangePass(password) } 
                    bolError={true} strError={strPass} require
                />

                {/* Boton iniciar sesion */}
                <MyButton 
                    titulo='Iniciar sesion'
                    onPress={()=> iniciarSesion()}
                    disable={true}
                />

                {/* Boton de registro */}
                <MyButton 
                    transparent={true}
                    titulo='Registrarse'
                    onPress={()=> goToScreen('Registro')}
                    disable={true}

                />
                
                {/* Ejemplo simple de boton */}
                {/* <View style={mainStyles.btnMain}>
                    <TouchableOpacity>
                        <Text style={ mainStyles.btntxt}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View> */}

                {/* Olvide contraseña solo texto con link */}
                <View>
                    <TouchableOpacity onPress={() => goToScreen('RecuperarPassword')}>
                        <Text style={ [mainStyles.txtTransparent, { textDecorationLine: 'underline'}]}>
                            Olvide mi Contraseña
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </ScrollView>
    )

    function iniciarSesion(){


        if (confirm)
        {
            console.log("Iniciar!!!")
            loginAction({
                type: 'sign', data : {
                    email, password, nombre
                }
            })
            goToScreenwithLogin('Principal')
        }
        else{
            Alert.alert(
                "Aviso",
                "Revise los datos ingresados"
            )
            return
        }

        
    }

    function goToScreen(routeName){
        // console.log('Ir a ' + routeName)
        props.navigation.navigate(routeName)
    }
    
    function goToScreenwithLogin(routeName){
        props.navigation.replace(routeName)
    }

    function handleChangeEmail(email){
        
        console.log('et email: '+ email )
        setEmail(email)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email) === false) {
            // console.log();
            setStringError("Ingrese un email valido.")
            setConfirm(false)

            return false;
        }
        else {
            console.log("Email is correct");
            setStringError("")
            setConfirm(true)
        }
    }

    function handleChangePass(text){
        console.log("in: "+ text)
        setPassword(text)

        // 7 a 15 caracteres que contienen al menos un dígito numérico y un carácter especial
        // let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/

        // De 6 a 17 caracteres que contienen solo caracteres, dígitos numéricos, guiones bajos y el primer carácter debe ser una letra
        let reg = /^[A-Za-z]\w{5,18}$/;

        if (reg.test(text) === false) {
            console.log("no correct pass");
            setPassError("Debe contener al menos 6 caracteres, la primera mayus .")
            setConfirm(false)

            return false;
        }
        else {
            console.log("Pass is correct");
            setPassError("")
            setConfirm(true)
        };
    }
}