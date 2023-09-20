import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const PositionScreens = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28c4d9'
    },
    cajaMorada: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856d6',
        top: 50,
        left: 50

    }, cajaNaranja: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#f0a23b'

    },
});