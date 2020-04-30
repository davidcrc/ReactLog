import React, { useContext, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native';
import { mainStyles } from '@styles/styles'
import { UsuarioContext } from '@context/UsuarioContext'
import { colors } from 'react-native-elements';
import MyButton from '@components/MyButton'

// Creando Un hook
function useBackButton(handler){
    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handler)

        return() => {
            console.log('hardwareBackPress Close')
            BackHandler.removeEventListener("hardwareBackPress", handler)
        }
    }, [handler])
}

export default function PrincipalScreen(props) {

    // ESTA FUNCION ES PARA SALIR UTILIZANDO EL BOTON FISICO DEL TELEFONO
    // useBackButton(desconectarse)

    const [login, loginAction] = useContext(UsuarioContext)

    return (
        <View style={{ flex:1 , alignItems: 'center' }} >
            <StatusBar 
                backgroundColor={colors.BLUE} 
                barStyle='dark-content'
                translucent={true}
            />

            <Text style={{ textAlign: 'center', marginTop: 200, fontFamily: 'Poppins-Black' }}>
                Bienvenido { '\n' +login.usuario.nombre }
            </Text>

            <MyButton 
                    titulo='Cerrar sesion'
                    onPress={()=> desconectarse()}
                />
        </View>
    )


    function goToScreen(routeName){
        props.navigation.replace(routeName)
    }

    // 
    function desconectarse(){
        
        Alert.alert(
            "Salir",
            "¿Estas seguro que desea cerrar sesión?",
            [
                {
                    text: "Si", onPress: () => {
                        loginAction({
                            type: 'sign-out',
                            data: {}
                        })
                        goToScreen('Login')
                    }
                },
                {
                    text: "No", onPress: () => { }, style: 'cancel'
                }
            ]

        )
    }

}