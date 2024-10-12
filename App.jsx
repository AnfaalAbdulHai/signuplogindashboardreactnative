import React, {useState} from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './Screens/StartScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Tab_Navigation from './config/Tab_Navigation';
import {theme} from './core/theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {
//   StartScreen,
//   LoginScreen,
//   RegisterScreen,
//   ResetPasswordScreen,
//   Dashboard,
// } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track if the user is signed in

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Tab_Navigation" component={Tab_Navigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
