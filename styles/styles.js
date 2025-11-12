import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f0f4f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#040404ff',
  },
  description: {
    fontSize: 16,
    marginBottom: 6,
    color: '#555',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  favoriteCard: {
    borderColor: '#f54323ff',
    borderWidth: 2,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  hours: {
    fontStyle: 'italic',
    marginBottom: 6,
    color: '#777',
  },
  services: {
    marginBottom: 12,
    fontSize: 15,
    color: '#444',
  },
  favoriteButton: {
    padding: 12,
    backgroundColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
  },
  favoriteButtonActive: {
    backgroundColor: '#8e270eff',
  },
  favoriteText: {
    fontWeight: 'bold',
    color: '#000',
  },

  memberCard: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#ffffffff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3d0909ff',
  },
  aboutHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  aboutDescription: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#3b3b3bff',
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  contactCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
  },
  info: {
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'right',
  },
  bold: {
    fontWeight: 'bold',
  },
  link: {
    color: '#57160eff',
    marginTop: 10,
    textAlign: 'right',
  },
});
