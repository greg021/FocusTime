import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import {colors} from '../utils/colors';

export const RoundButton = ({
  title = '',
  size = 100,
  factor = 3.2,
  ...props
}) => {
  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      background={TouchableNativeFeedback.Ripple(colors.secondary, true)}>
      <View style={styles(size, factor).container}>
        <Text style={styles(size, factor).title}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = (size, factor) =>
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
      fontSize: size / factor,
    },
  });
