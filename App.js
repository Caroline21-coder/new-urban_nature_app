import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name= "Home" component={HomeScreen} options={{ tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} /> ) }} />
        <Tab.Screen name= "Profile" component={ProfileScreen} options={{ tabBarIcon: ({color, focused}) => (<Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} /> ) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}