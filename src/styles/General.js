import { StyleSheet } from 'react-native'
import Colors from './Colors'

//Estilo para ImageBackground
const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },

    splash: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.SPLASH,
    }
})

export { imageBackgroundStyle }