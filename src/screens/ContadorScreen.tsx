import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [Contador, setContador] = useState(0)

    const onPressBottonIncrement = () => {
        setContador(Contador + 1)
    }
    const onPressBottonDecrement = () => {
        setContador(Contador - 1)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {Contador}</Text>
            <Fab text='+1' onPress={onPressBottonIncrement} />
            <Fab text='-1' onPress={onPressBottonDecrement} position='bl' />


            {/* <TouchableOpacity
                style={styles.fabLocationBL}
                onPress={onPressBottonDecrement}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',


    }, title: {
        fontSize: 45,
        textAlign: 'center',
        top: -15
    }, botton: {
        backgroundColor: 'blue',
        borderRadius: 100,
    },

});

