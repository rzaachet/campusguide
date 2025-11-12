import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import EventsScreen from '../screens/EventsScreen';
import AboutScreen from '../screens/AboutScreen';
import PlacesStackNavigator from './PlacesStackNavigator';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#8e270eff' },
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#8e270eff',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Places') iconName = 'location-outline';
          else if (route.name === 'Events') iconName = 'calendar-outline';
          else if (route.name === 'About') iconName = 'information-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Places" component={PlacesStackNavigator} options={{ title: 'Campus Places' }} />
      <Tab.Screen name="Events" component={EventsScreen} options={{ title: 'Upcoming Events' }} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}
