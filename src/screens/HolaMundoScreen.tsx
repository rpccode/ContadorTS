import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <Text style={{
                fontSize: 45,
                textAlign: 'center'
            }}>Hola Mundo</Text>

        </View>
    );
}

const styles = StyleSheet.create({

});