import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';

const EVENTS = [
  { id: '1', title: 'WMSU CET', date: 'Nov 20, 2025', description: 'Daan ng mga pag asa ng bayan!' },
  { id: '2', title: 'WMSU Alumni Week', date: 'Dec 5, 2025', description: 'Showcase students calamares and fireworks' },
];

export default function EventsScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 10 }}>
      {EVENTS.map((event) => (
        <View key={event.id} style={[styles.card, { borderLeftWidth: 5, borderLeftColor: '#8e270eff' }]}>
          <Text style={styles.cardTitle}>{event.title}</Text>
          <Text>Date: {event.date}</Text>
          <Text>{event.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

