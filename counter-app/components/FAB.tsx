import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
    label: string;
    onPress: () => void;
    onLongPress: () => void;
}

export default function FAB({ label, onPress, onLongPress }: Props) {
    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.floatingButton}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 30,
        color: 'white'
    },
    floatingButton: {
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: '#65558f',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4
    }
})