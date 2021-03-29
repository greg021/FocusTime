import React from 'react';
import {View, StyleSheet} from 'react-native';

import {RoundButton} from '../../components/RoundButton';

export const Timing = ({changeTime}) => (
  <>
    <View style={styles.timingButton}>
      <RoundButton size={57} title="6s" onPress={changeTime(0.1)} />
    </View>
    <View style={styles.timingButton}>
      <RoundButton size={57} title="15m" onPress={changeTime(15)} />
    </View>
    <View style={styles.timingButton}>
      <RoundButton size={57} title="20m" onPress={changeTime(20)} />
    </View>
  </>
);

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
