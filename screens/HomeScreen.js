import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome !</Text>
            <Image
                style={styles.image}
                source={require('../assets/parc.png')}
            />
            <Text style={styles.text}>This is where you start your urban nature journey.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    text: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default HomeScreen;