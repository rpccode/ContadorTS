import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    text: String;
    position?: 'br' | 'bl';
    onPress: () => void;
}


export const Fab = ({ text, onPress, position = 'br' }: Props) => {
    const ios = () => {
        return (

            <TouchableOpacity
                activeOpacity={0.75}
                style={(position === 'br') ? styles.fabLocationBR : styles.fabLocationBL}
                onPress={onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        )

    }
    const androi = () => {
        return (
            <View style={(position === 'br') ? styles.fabLocationBR : styles.fabLocationBL}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {text}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>)
    }
    return (Platform.OS === 'ios') ? ios() : androi()
}

const styles = StyleSheet.create({

    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    }

    , fab: {
        backgroundColor: '#5856d6',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }, fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
});