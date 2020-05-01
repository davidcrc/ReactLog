/**
 * TextInput para el inicio de sesion
 * prop bolGone, define si sera input pass o no
 * prop bolError, aun no empleada ...
 */
import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon, Input } from 'react-native-elements'
import color from '@styles/Colors'


export default function MyTextInput(props) {

  const image_show_pass = require('@recursos/images/ic_show_password.png');
  const image_hide_pass = require('@recursos/images/ic_hide_password.png')

  return (
    <Input
      style={{ alignItems: 'center' }}
      containerStyle={{ marginBottom: 15, borderBottomColor: color.LIGHTPRIMARYCOLOR, borderBottomWidth: 0 }}
      inputStyle={{
        fontSize: 16, paddingVertical: 10,
        paddingHorizontal: 8, marginTop: 10,
        color: color.PRIMARYCOLOR,
        fontFamily: "Poppins-Light",
      }}
      placeholderTextColor={color.LIGHTPRIMARYCOLOR}
      placeholder={props.placeholder}
      leftIconContainerStyle={{ marginLeft: 0 }}
      leftIcon={<Icon size={24} color={color.PRIMARYCOLOR}
        type={'font-awesome'} name={props.image} />}
      rightIcon={props.bolGone ?
        <TouchableOpacity activeOpacity={0.9} style={styles.btnVisibility} onPress={props.onPress}>
          <Image style={styles.btnImage} tintColor={color.PRIMARYCOLOR}
            source={(props.secureTextEntry) ? image_show_pass : image_hide_pass } />
        </TouchableOpacity> :
        <Icon size={24} color={color.PRIMARYCOLOR}
          type={'font-awesome'} name={props.imageRight} />}
      errorStyle={{ color: color.RED }}
      errorMessage={(props.bolError) ? props.strError : ''}
      editable={props.editable}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
      onChangeText={props.onChangeText}
      value={props.value} />
  )
}

const styles = StyleSheet.create({

  btnVisibility:
  {
    height: 40,
    width: 35,
    paddingTop: 8,
    paddingLeft: 5,
    paddingRight: 5
  },

  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
})
