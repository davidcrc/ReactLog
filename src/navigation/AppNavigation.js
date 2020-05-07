/**
 * Aqui se colocan todas las vistas disponibles
 * en forma de pila
 */
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import SplashScreen from '@screens/SplashScreen'
import LoginScreen from '@screens/LoginScreen'
import PrincipalScreen from '@screens/PrincipalScreen'
import RecuperarPasswordScreen from '@screens/RecuperarPasswordScreen'
import RegistroScreen from '@screens/RegistroScreen'
import Profile from '@screens/Profile'

const AppNavigation = createStackNavigator({

    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false,
        }
    },

    Login: {
        screen: LoginScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Principal: {
        screen: PrincipalScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    RecuperarPassword: {
        screen: RecuperarPasswordScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    Registro: {
        screen: RegistroScreen,
        navigationOptions: {
            headerShown: false,
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        }
    }
})

export default createAppContainer(AppNavigation)