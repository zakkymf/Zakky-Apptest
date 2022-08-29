import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, Fonts} from '../theme';

interface ButtonProps {
  label: string;
  onPress: () => void;
  colors?: string[];
}

interface FloatingButtonProps {
  colors?: string[];
  renderIcon: any;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({label, colors, onPress}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.linear}
      colors={colors ?? [Colors.caramel, Colors.choco]}>
      <TouchableOpacity style={styles.standartButton} onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const FloatingButton: React.FC<FloatingButtonProps> = ({
  renderIcon,
  colors,
  onPress,
  style,
}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors ?? [Colors.caramel, Colors.choco]}
      style={style ?? styles.floatingButton}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        {renderIcon()}
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    bottom: 30,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linear: {
    height: 48,
    width: '100%',
    borderRadius: 10,
  },
  standartButton: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 12,
    color: Colors.white,
    fontFamily: Fonts.type.monserratDemi,
  },
});

export {Button, FloatingButton};
