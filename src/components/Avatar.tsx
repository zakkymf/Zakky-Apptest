import React from 'react';
import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import images from '../assets/images';

interface AvatarProps {
  source: string;
  avatarStyle?: StyleProp<ImageStyle>;
}

const Avatar: React.FC<AvatarProps> = ({source, avatarStyle}) => {
  return (
    <Image
      style={avatarStyle ?? styles.avatar}
      source={source !== 'N/A' ? {uri: source} : images.default_avatar}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Avatar;
