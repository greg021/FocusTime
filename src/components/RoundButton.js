import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const RoundButton = ({title = '', size = 125, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles(size).container}
      onPress={props.onPress}>
      <Text style={styles(size).title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size,
      borderColor: '#fff',
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: size / 3,
      color: '#fff',
    },
  });
