import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StoreCards from '../Screens/CardRender';
import About from '../Screens/About';
import Cart from '../Screens/Cart';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

export default function Tab_Navigation({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{ 
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray', // Optionally define inactive color
        headerShown: false, // Hide headers in tab navigation
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />;
          },
        }}
        name="Home"
        component={StoreCards}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="profile" size={size} color={color} />;
          },
        }}
        name="Profile"
        component={About}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="shoppingcart" size={size} color={color} />;
          },
        }}
        name="Cart"
        component={Cart}
      />
    </Tab.Navigator>
  );
}
