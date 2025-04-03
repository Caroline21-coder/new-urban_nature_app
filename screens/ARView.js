import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { useNavigation } from '@react-navigation/native';

export default function ARView({ route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [selectedTree, setSelectedTree] = useState(route.params?.selectedTree);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const mediaStatus = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted' && mediaStatus.status === 'granted');
    })();
  }, []);

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ skipProcessing: true });
      await MediaLibrary.saveToLibraryAsync(photo.uri);
      Alert.alert('Photo saved to gallery!');
    }
  };

  const handleReset = () => {
    setSelectedTree(null); // permet de relancer le choix de l’arbre
  };

  if (!hasPermission) return <Text>Permission refusée</Text>;

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={cameraRef} />

      {selectedTree && (
        <Image source={selectedTree} style={styles.tree} resizeMode="contain" />
      )}

      {/* Boutons Reset / Save */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTakePicture}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  tree: {
    position: 'absolute',
    bottom: 100,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonText: {
    backgroundColor: '#ffffffaa',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
});