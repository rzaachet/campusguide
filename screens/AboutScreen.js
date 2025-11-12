import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { styles } from '../styles/styles';

const TEAM_MEMBERS = [
  { id: '1', name: 'Nuriza P. Ancheta', role: 'reklamo, AI Full Stack, E-bike Rear Ended'},
  { id: '2', name: 'Erica Aquino'},
  { id: '3', name: 'Hernane Benedicto'},
  { id: '4', name: 'Paul Zaragoza'}
];

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      <Text style={styles.title}>Group 3 — Campus Guide</Text>
      <Text style={{ marginBottom: 15 }}>Meet our team:</Text>

      {TEAM_MEMBERS.map((member) => (
        <View key={member.id} style={styles.memberCard}>
          <Text style={styles.memberName}>{member.name}</Text>
          <Text style={styles.memberRole}>{member.role}</Text>
        </View>
      ))}

      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Important Contacts:</Text>
      <Text>@wmsu.edu.ph</Text>
      <Text>Campus Security: 911</Text>
      <Text>Health Services: 911</Text>
    </ScrollView>
  );
}
