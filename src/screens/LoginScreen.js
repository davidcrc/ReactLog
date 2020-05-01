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
    const [nombre, setNombre] = useState('David')

    // variables utilizadas para decir si 
    // el icon password esta oculto o visible (default oculto)
    const [hidePassword, setHidePassword] = useState(true)

    const logo = require('@recursos/images/foodapp.png')

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
                    value={email} onChangeText={ (email) => setEmail(email) } 
                />

                {/* Input para la contraseña (bolError aun no valida los datos!!!) */}
                <MyTextInput keyboardType={null} placeholder='Contraseña' image='lock' bolGone={true}
                    secureTextEntry={hidePassword} bolError={true}
                    onPress={() => setHidePassword(!hidePassword)}
                    value={password} onChangeText={ (password) => setPassword(password) }
                />

                {/* Boton iniciar sesion */}
                <MyButton 
                    titulo='Iniciar sesion'
                    onPress={()=> iniciarSesion()}
                />

                {/* Boton de registro */}
                <MyButton 
                    transparent={true}
                    titulo='Registrarse'
                    onPress={()=> goToScreen('Registro')}
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

        // TODO: FALTA LA VALIDACION DE CAMPOS
        // y la posterior rediccion...
        if ( password <= 5 ) {
            Alert.alert(
                "Password",
                "Debe contener al menos 3 caracteres"
            )
            return
        }
        
        loginAction({
            type: 'sign', data : {
                email, password, nombre
            }
        })

        
        goToScreenwithLogin('Principal')
    }

    function goToScreen(routeName){
        // console.log('Ir a ' + routeName)
        props.navigation.navigate(routeName)
    }
    
    function goToScreenwithLogin(routeName){
        props.navigation.replace(routeName)
    }
}