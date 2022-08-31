import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Fonts} from '../theme';

interface InputProps {
  editable?: boolean;
  value: string;
  label: string;
  placeholder?: string;
  keyboardType?: any;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  onChangeText?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  value,
  label,
  editable,
  keyboardType,
  placeholder,
  onChangeText,
  textInputStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        testID="input"
        editable={editable}
        style={[styles.input, textInputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    flexDirection: 'column',
  },
  label: {
    fontSize: 12,
    fontFamily: Fonts.type.monserrat,
  },
  input: {
    height: 40,
    marginTop: 5,
    width: '100%',
    fontSize: 14,
    borderBottomWidth: 0.5,
    fontFamily: Fonts.type.monserrat,
  },
});

export default Input;
