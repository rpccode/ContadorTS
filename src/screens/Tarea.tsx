import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Tarea = () => {
    return (
        <View style={styles.conatainer}>
            <Text style={styles.caja1}> </Text>
            <Text style={styles.caja2}></Text>
            <Text style={styles.caja3}></Text>

        </View>
    );
}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-around',
        // alignItems: 'baseline',
        backgroundColor: '#28425b'
    },
    caja1: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 20,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    caja2: {
        flex: 3,
        width: 100,
        // height: 100,
        borderWidth: 20,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // left: '24%',
        // top: -100
    },
    caja3: {
        // flex: 1,
        width: 100,
        height: 100,
        borderWidth: 20,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // top: -100

    }
});