import { Modal, View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const treeCatalog = [ 
  
  {id : 1, name: 'Perfect tree', source: require('../assets/perfecttree.png')}
];

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
  onSelect: (image: any) => void;
}>;

export default function TreePicker({ isVisible, onClose, onSelect }: Props) {
  return (
    <View>
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Choose a tree</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
  {treeCatalog.map((tree) => (
    <Pressable key={tree.id} onPress={() => { onSelect(tree.source); onClose(); }}>
      <Image source={tree.source} style={styles.treeImage} />
    </Pressable>
  ))}
</ScrollView>
      </View>
    </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  treeImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  scrollView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
