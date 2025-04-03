import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: ImageSourcePropType;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  return (
    <View style={styles.container}>
      {/* Image de fond */}
      <Image source={imgSource} style={styles.backgroundImage} />

      {/* Arbre superposé (si sélectionné) */}
      {selectedImage && (
        <Image source={selectedImage} style={styles.treeOverlay} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 440,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  treeOverlay: {
    position: 'absolute',
    width: 100,
    height: 100,
    bottom: 30,
    alignSelf: 'center',
  },
});

