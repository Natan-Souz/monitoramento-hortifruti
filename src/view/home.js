import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

export default function Home() {
  const fruits = [
    { name: 'Maçã', capacity: '60%', image: require('./img/apple.png'), key: '1' },
    { name: 'Banana', capacity: '80%', key: '2', image: require('./img/banana.png') },
    { name: 'Laranja', capacity: '40%', key: '3', image: require('./img/laranja.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>Relatório - Todas as Frutas Monitoradas</Text>
        <FlatList
          data={fruits}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSubtitle}>Capacidade (aprox.)</Text>
              </View>
              <Text
                style={[
                  styles.cardCapacity,
                  item.capacity === '60%' ? styles.capacityGreen : item.capacity === '80%' ? styles.capacityGreen : styles.capacityRed,
                ]}
              >
                {item.capacity}
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cc163',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center', // Centraliza verticalmente
    paddingTop: 50, // Ajuste de espaçamento superior
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
  },
  cardCapacity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  capacityGreen: {
    color: '#28a745',
  },
  capacityRed: {
    color: '#dc3545',
  },
});
