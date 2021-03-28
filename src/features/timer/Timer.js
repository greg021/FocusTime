import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Countdown} from '../../components/Countdown';
import {RoundButton} from '../../components/RoundButton';
import {fontSizes, spacings} from '../../utils/sizes';

export const Timer = ({focusSubject}) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View>
        <Text style={styles.title}>Focused On: </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonWrapper({flex: 0.3})}>
        {isStarted ? (
          <RoundButton
            title="pause"
            size={80}
            onPress={() => setIsStarted(false)}
          />
        ) : (
          <RoundButton
            title="start"
            size={80}
            onPress={() => setIsStarted(true)}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
  task: {
    color: 'white',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: ({
    flex = 0.25,
    padding = 15,
    justifyContent = 'center',
  } = {}) => ({
    flex,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent,
    padding,
  }),
});
