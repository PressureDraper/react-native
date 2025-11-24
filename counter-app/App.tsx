import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import FAB from './components/FAB';

export default function App() {
    const [count, setCounter] = useState<number>(0);

    const handlePress = () => {
        setCounter(prev => prev + 1);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{count}</Text>
            <FAB label='+1' onPress={handlePress} onLongPress={() => setCounter(0)} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counter: {
        fontSize: 100,
        color: 'white'
    }
});
