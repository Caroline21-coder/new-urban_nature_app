import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ProfilePicker from '../ProfilePicker.js'

const ProfileScreen = () => {


    const [userType, setUserType] = useState('default');
    const [showPicker, setShowPicker] = useState(false);
    const handlePress = () => {
        setShowPicker(true);
    }
    const handleUserChange = (type) => {
        setUserType(type);
    }

    let imageSource;
    switch (userType) {
        case 'family':
            imageSource = require('../assets/family.jpg');
            break;
        case 'citizen':
            imageSource = require('../assets/citizen.jpg');
            break;
        case 'senior': 
            imageSource = require('../assets/senior.png');
            break;
        case 'nature enthusiast':
            imageSource = require('../assets/explorer.png');
            break;
        default:
            imageSource = require('../assets/citizen.jpg')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title} onPress={handlePress}>My profile</Text>
            <Image style={styles.image} source={imageSource}/>
            <Text style={styles.text}>This is my profile.</Text>

            {showPicker && (<ProfilePicker onUserChange={handleUserChange} />) }
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

export default ProfileScreen;