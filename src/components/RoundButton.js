import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const RoundButton = ({title = '', size = 100, ...props}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles(size).container}
      onPress={props.onPress}>
      <Text style={styles(size).title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      borderColor: '#fff',
      borderRadius: size,
      borderWidth: 2,
      height: size,
      justifyContent: 'center',
      width: size,
    },
    title: {
      color: '#fff',
      fontSize: size / 3.2,
    },
  });
