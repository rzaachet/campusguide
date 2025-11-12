import React, { useState } from 'react';
import { FlatList, TouchableOpacity, Text, Image, View } from 'react-native';
import { styles } from '../styles/styles';
import { images } from '../assets/images';

const PLACES = [
  { id: '1', name: 'Library', description: 'Books, study rooms, and quiet area.', hours: '8am - 4pm', services: 'Borrow books, Sleep', address: 'Main Campus A, Library Building', favorite: false },
  { id: '2', name: 'Canteen', description: 'Food and drinks available.', hours: '7am - 5pm', services: 'Snacks, meals, drinks', address: 'Main Campus A, Next to Gate 2', favorite: false },
  { id: '3', name: 'Admin Office', description: 'Student services and admin help.', hours: '8am - 4pm', services: 'Registration, inquiries', address: 'Main Campus A, Back of Court', favorite: false },
];

export default function PlacesListScreen({ navigation }) {
  const [places, setPlaces] = useState(PLACES);

  const toggleFavorite = (id) => {
    setPlaces((prev) =>
      prev.map((place) =>
        place.id === id ? { ...place, favorite: !place.favorite } : place
      )
    );
  };

  const renderPlace = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, item.favorite && styles.favoriteCard]}
      onPress={() => navigation.navigate('PlaceDetail', { place: item, toggleFavorite })}
    >
      <Image source={images[item.name]} style={styles.cardImage} />
      <View style={{ paddingTop: 10 }}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.hours}>Open: {item.hours}</Text>
        <Text style={styles.services}>Address: {item.address}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={renderPlace}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}
