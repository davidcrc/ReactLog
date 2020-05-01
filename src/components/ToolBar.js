/**
 * Un toolBar personalizado en su titulo
 */
import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import color from '@styles/Colors'

export default function ToolBar(props){

    return (
        <View style={[props.style, styles.view ]}>
            {/* Titulo central */}
            {props.titulo && 
                <Text style={ styles.text }>{props.titulo}
                </Text>
            }

            {/* Icono a la izquierda con una funccion asignable */}
            {props.iconLeft &&
            <TouchableOpacity style={ styles.touchable } onPress={props.onPressLeft}>
                <Image style={ styles.image } source={props.iconLeft} />
            </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({

    view: {
        height: 64, 
        marginTop: 24, 
        backgroundColor: color.PRIMARYCOLOR
    },
    text: { 
        fontFamily: "Poppins-Medium", 
        marginTop: 12, textAlign: 'center', fontSize: 25, 
        color: color.WHITE 
    },
    touchable:{ 
        position: 'absolute', 
        left: 20, 
        top: 15 
    },
    image: { 
        tintColor: color.WHITE, 
        width: 30, 
        height: 30 
    }
})
  