import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Card from './card';

export default function ReviewDetails({navigation}) {
    return (
        <View>
            <Card>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
            </Card>
        </View>
    )
}