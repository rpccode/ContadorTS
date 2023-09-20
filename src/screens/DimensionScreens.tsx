import React from 'react';
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';



// const { height, width } = Dimensions.get('window')
export const DimensionScreens = () => {
    const { height, width } = useWindowDimensions()
    return (
        <View>
            <View style={styles.container}>
                <View style={{ ...styles.cajaMorada, width: width * 0.20 }} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}>W:{width},   H:{height}</Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 600,
        backgroundColor: 'red'
    },
    cajaMorada: {
        height: '50%',
        backgroundColor: '#5856d6'
    },
    cajaNaranja: {
        backgroundColor: '#f0a23b'

    },
    title: {
        fontSize: 30,
        textAlign: 'center'

    }
});