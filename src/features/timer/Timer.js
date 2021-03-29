import React, {useState} from 'react';
import {StyleSheet, Text, View, Vibration} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import * as Progress from 'react-native-progress';

import {Countdown} from '../../components/Countdown';
import {RoundButton} from '../../components/RoundButton';
import {fontSizes, spacings} from '../../utils/sizes';
import {colors} from '../../utils/colors';
import {Timing} from './Timing';

export const Timer = ({focusSubject, onCancel, onTimerEnd}) => {
  const [minutes, setMinutes] = useState(10);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = p => {
    setProgress(p / 100);
  };

  const changeTime = min => () => {
    setProgress(1);
    setIsStarted(false);
    setMinutes(min);
  };

  const onEnd = async () => {
    try {
      // await soundObject.loadAsync(require('../../../assets/warn.wav'));
      // await soundObject.playAsync();
      Vibration.vibrate(2000, false);
    } catch (error) {
      console.log(error);
    }

    setProgress(1);
    setIsStarted(false);
    setMinutes(20);
    onTimerEnd();
  };

  return (
    <>
      <KeepAwake />
      <View style={styles.container}>
        <View style={styles.countdown}>
          <Countdown
            minutes={minutes}
            isPaused={!isStarted}
            onProgress={onProgress}
            onEnd={onEnd}
          />
        </View>
        <View>
          <Text style={styles.task}>Focused On: </Text>
          <Text style={{...styles.task, fontWeight: 'bold'}}>
            {focusSubject}
          </Text>
        </View>
        <View style={{padding: spacings.md, width: '100%'}}>
          <Progress.Bar
            progress={progress}
            height={8}
            width={null}
            color={colors.progress}
            backgroundColor={colors.progressSecondary}
            borderWidth={0}
          />
        </View>
        <View style={styles.buttonWrapper()}>
          <Timing changeTime={changeTime} />
        </View>
        <View style={styles.buttonWrapper({flex: 0.3})}>
          {isStarted ? (
            <RoundButton
              title="pause"
              size={80}
              factor={3.8}
              onPress={() => setIsStarted(false)}
            />
          ) : (
            <RoundButton
              title="start"
              size={80}
              factor={3.8}
              onPress={() => setIsStarted(true)}
            />
          )}
        </View>
        <View style={styles.clearSubject}>
          <RoundButton title="X" size={50} onPress={() => onCancel()} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  task: {
    color: colors.textPrimary,
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: ({
    flex = 0.25,
    padding = spacings.md,
    justifyContent = 'center',
  } = {}) => ({
    flex,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent,
    padding,
  }),
  clearSubject: {
    position: 'absolute',
    bottom: spacings.lg,
    left: spacings.lg,
  },
});
