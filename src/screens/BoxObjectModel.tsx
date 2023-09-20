import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModel = () => {
    return (
        <View style={styles.constainer}>
            <Text style={styles.title}>box</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: 'red'

    },
    title: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        fontSize: 50,
        marginHorizontal: 20,
        borderWidth: 20
    }
});