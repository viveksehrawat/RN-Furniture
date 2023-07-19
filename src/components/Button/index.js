import React from 'react';
import {Pressable, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default React.memo(Button);