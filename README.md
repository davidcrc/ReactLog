# Reparar blacklis de (por si no levanta la app) : /node_modules/metro-config/serc/defaults/blacklist.js

	var sharedBlacklist = [
	/node_modules\/react\/dist\/.*/,
	/website\/node_modules\/.*/,
	/heapCapture\/bundle\.js/,
	/.*\/__tests__\/.*/
	];

	var sharedBlacklist = [
	/node_modules[\/\\]react[\/\\]dist[\/\\].*/,
	/website\/node_modules\/.*/,
	/heapCapture\/bundle\.js/,
	/.*\/__tests__\/.*/
	];

# Las fuentes usadas estan en assets/fonts

	- Dentro del archivo react-native.config.js:
		module.exports = {
			assets: ['./assets/fonts']
		}

	- Deberiamos linkear el pryecto (comprobar en android/app/src/main/assets/fonts, esten las fonts):
		react-native link

# Dependencias necesarias

- Para la navegacion
	npm install --save react-navigation
	npm install --save react-navigation-stack

- Animacion pulsante
	npm install --save react-native-animatable
	
	npm install --save react-native-gesture-handler
	npm install --save react-native-safe-area-context
	npm install --save react-native-safe-area-view
	npm install --save @react-native-community/masked-view

- Guardar datos de sesion
	npm install --save @react-native-community/async-storage

- Toas para mostrar al usuario
	npm install --save react-native-snackbar

- Crear los inputs
	npm install --save react-native-elements

- Diferentes iconos y botones	
	npm install --save react-native-vector-iconsreact-navigation
	
- ...
	npm install --save react-navigation react-navigation-stack'

- ...
	npm install --save react-navigation-stack

- 
	npm install --save react-native-screens
	
al final realizar un link al proyecto

npx react-native link
