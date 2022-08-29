import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
} from 'react-native';
import Avatar from './Avatar';

interface ListProps {
  name: string;
  photo: string;
  age: number;
  avatarStyle?: StyleProp<ImageStyle>;
}

const List: React.FC<ListProps> = ({name, photo, age, avatarStyle}) => {
  return (
    <TouchableOpacity style={styles.list}>
      <Avatar source={photo} avatarStyle={avatarStyle} />
      <View style={styles.detail}>
        <Text>{name}</Text>
        <Text>{age}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detail: {
    marginLeft: 10,
  },
});

export default List;
