import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
} from 'react-native';
import {Colors, Fonts} from '../theme';
import Avatar from './Avatar';

interface ListProps {
  name: string;
  photo: string;
  avatarStyle?: StyleProp<ImageStyle>;
  onPress: () => void;
}

const List: React.FC<ListProps> = ({name, photo, onPress, avatarStyle}) => {
  return (
    <TouchableOpacity style={styles.list} onPress={onPress}>
      <Avatar source={photo} avatarStyle={avatarStyle} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontSize: 14,
    marginLeft: 15,
    color: Colors.black,
    fontFamily: Fonts.type.monserrat,
  },
});

export default List;
