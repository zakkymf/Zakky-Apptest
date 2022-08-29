import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

interface AvatarProps {
  source: string;
  avatarStyle?: StyleProp<ImageStyle>;
}

const Avatar: React.FC<AvatarProps> = ({source, avatarStyle}) => {
  return <Image style={avatarStyle ?? styles.avatar} source={{uri: source}} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Avatar;
