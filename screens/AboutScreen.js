import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { styles } from '../styles/styles'; 

export default function AboutScreen() {
  const members = [
    { name: 'Nuriza P. Ancheta', email: 'hz202300003@wmsu.edu.ph' },
    { name: 'Erica Aquino', email: 'hz@wmsu.edu.ph' },
    { name: 'Hernane Benedicto ', email: 'hz@wmsu.edu.ph' },
    { name: 'Paul Zaragoza', email: 'hz@wmsu.edu.ph' },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 50 }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.aboutDescription}>
        CampusGuide is a mobile app designed to help students explore campus facilities, events, 
        and important locations.
      </Text>

      <Text style={[styles.aboutHeader, { marginTop: 20 }]}>Team Members</Text>

      {members.map((member, index) => (
        <View key={index} style={styles.memberCard}>
          <Text style={styles.memberName}>👤 {member.name}</Text>
          <Text style={styles.info}>📧 {member.email}</Text>

          <TouchableOpacity onPress={() => Linking.openURL(`mailto:${member.email}`)}>
            <Text style={[styles.link, { textDecorationLine: 'underline', marginTop: 5 }]}>
              Send Email
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Contacts information:</Text>
      <Text>usmw@wmsu.edu.ph</Text>
      <Text>📱 Phone: +63 912 345 6789</Text>
      <Text>🏫 School: Western Mindanao State University</Text>
      <Text>📍 Location: Zamboanga City, Philippines</Text>
    </ScrollView>
  );
}
