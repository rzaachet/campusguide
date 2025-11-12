import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';

const Stack = createNativeStackNavigator();

export default function PlacesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PlacesList" component={PlacesListScreen} options={{ title: 'Places📍' }} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} options={{ title: 'Place Details' }} />
    </Stack.Navigator>
  );
}
