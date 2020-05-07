/**
 * Ventana principal despues del login
 */
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Alert, BackHandler, StyleSheet, Dimensions } from 'react-native';
// import { mainStyles } from '@styles/styles'
import { UsuarioContext } from '@context/UsuarioContext'
import { colors } from 'react-native-elements';
import MyButton from '@components/MyButton'

var { width } = Dimensions.get("window")

// import Components
import Food from '@screens/Food'
import Cart from '@screens/Cart'
import Address from '@screens/Address'
import Profile from '@screens/Profile'
// unable console yellow
console.disableYellowBox = true;
// import icons
import Icon from 'react-native-vector-icons/Ionicons';

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
    const [module, setModule] = useState(1)


    return (
        <View style={{flex:1}}>
            {
            module ==1? <Food />
            : module ==2? <Cart />
            : module ==3? <Address />
            :<Profile />
            }
            <View style={styles.bottomTab}>

            <TouchableOpacity style={styles.itemTab} onPress={()=>setModule(1)}>
                <Icon name="md-restaurant" size={30} color={ module ==1?"#900":"gray"} />
                <Text>Food</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.itemTab} onPress={()=>setModule(2)}>
                <Icon name="md-basket" size={30} color={ module ==2?"#900":"gray"} />
                <Text>Cart</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.itemTab} onPress={()=>setModule(3)}>
                <Icon name="md-map" size={30} color={ module ==3?"#900":"gray"} />
                <Text>Address</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.itemTab} onPress={()=>setModule(4)}>
                <Icon name="md-contact" size={30} color={ module ==4?"#900":"gray"} />
                <Text>Profile</Text>
            </TouchableOpacity>
            </View>
        </View>
    )


    function goToScreen(routeName){
        props.navigation.replace(routeName)
    }

    

}

const styles = StyleSheet.create({
    bottomTab:{
      height:60,
      width:width,
      backgroundColor:'orange',
      flexDirection:'row',
      justifyContent:'space-between',
      elevation:8,
      shadowOpacity:0.3,
      shadowRadius:50,
    },
    itemTab:{
      width:width/4,
      backgroundColor:'white',
      alignItems:'center',
      justifyContent:'center'
    }
  })