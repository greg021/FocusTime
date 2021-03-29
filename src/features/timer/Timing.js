import React from 'react';
import {View, StyleSheet} from 'react-native';

import {RoundButton} from '../../components/RoundButton';

export const Timing = ({changeTime}) => (
  <>
    <View style={styles.timingButton}>
      <RoundButton size={60} title="6s" onPress={changeTime(0.1)} />
    </View>
    <View style={styles.timingButton}>
      <RoundButton size={60} title="15" onPress={changeTime(15)} />
    </View>
    <View style={styles.timingButton}>
      <RoundButton size={60} title="20" onPress={changeTime(20)} />
    </View>
  </>
);

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
