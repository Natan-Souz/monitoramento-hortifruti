import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    { props.children }
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cc163', //dita a cor do fundo na pagina home, ao redor dos cards
        justifyContent: 'center',
        padding: 10,
        marginVertical: 40,
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#f1f1f1',
        shadowOffset: { width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6, 
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10, 
        
    },
})