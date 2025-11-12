import React, { useState, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { styles } from '../styles/styles';
import { images } from '../assets/images';

export default function PlaceDetailScreen({ route }) {
  const { place, toggleFavorite: toggleParentFavorite } = route.params;

  const [isFavorite, setIsFavorite] = useState(place.favorite);

  // Animated scale for button press
  const scale = useRef(new Animated.Value(1)).current;

  const handleToggleFavorite = () => {
    // Immediate local state update
    setIsFavorite(!isFavorite);

    // Propagate change to parent
    toggleParentFavorite(place.id);

    // Button animation
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.2, duration: 100, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Image source={images[place.name]} style={styles.cardImage} />
      <Text style={styles.title}>{place.name}</Text>
      <Text style={styles.description}>{place.description}</Text>
      <Text style={styles.hours}>Open Hours: {place.hours}</Text>
      <Text style={styles.services}>Services: {place.services}</Text>
      <Text style={styles.services}>Address: {place.address}</Text>

      <Animated.View style={{ transform: [{ scale }], marginTop: 10 }}>
        <TouchableOpacity
          style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
          onPress={handleToggleFavorite}
          activeOpacity={0.8} // slight feedback on touch
        >
          <Text style={[styles.favoriteText, isFavorite && { color: '#fff' }]}>
            {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
