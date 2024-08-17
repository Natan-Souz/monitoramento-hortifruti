import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import Card from './card';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const [reviews, setReviews] = useState([
    { title: 'Banana', rating: 5, body: 'lorem ipsum', key: '1'},
    { title: 'Maçã', rating: 5, body: 'lorem ipsum', key: '2'},
    { title: 'Laranja', rating: 5, body: 'lorem ipsum', key: '3'},
  ])
  const navigation = useNavigation();
  return (
    <View style={StyleSheet.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('./reviewDetails.js', item)}>
            <Card>
              <Text style={styles.card}>{ item.title }</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
      marginHorizontal: 14,
      marginVertical: 40, 
      marginTop: 40,
      
  },
  container: {
    flex: 1,
    backgroundColor: '#5cc163',
    justifyContent: 'center',
    padding: 10,
    marginVertical: 40,
},
})
