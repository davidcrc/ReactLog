/**
 * Componente Boton
 * Este se define deacuerdo a su prop transparent
 */
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import {mainStyles} from '@styles/styles'
import color from '@styles/Colors'

function MyButton(props){

    // Define un estilo de boton deacuerdo a los parametros pasados ...
    const sButton = props.transparent ? mainStyles.btnTransparent : mainStyles.btnMain
    const sText = props.transparent ? { color: color.BLUE } : null

    return (
        
        <TouchableOpacity style={ [sButton, props.style] }
            onPress={ props.onPress } disable={props.disable} >
            <Text style={ [mainStyles.btntxt , sText] } > {props.titulo} </Text>
        </TouchableOpacity>
        
    )
}

export default MyButton
