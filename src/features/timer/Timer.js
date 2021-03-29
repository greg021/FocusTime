import React, {useState} from 'react';
import {StyleSheet, Text, View, Vibration} from 'react-native';
import {Countdown} from '../../components/Countdown';
import {RoundButton} from '../../components/RoundButton';
import {fontSizes, spacings} from '../../utils/sizes';
import * as Progress from 'react-native-progress';
import {Timing} from './Timing';
// import KeepAwake from 'react-native-keep-awake';

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  const [minutes, setMinutes] = useState(0.1);
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
      {/* <KeepAwake /> */}
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
          <Text style={styles.title}>Focused On: </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
        <View style={{padding: spacings.md, width: '100%'}}>
          <Progress.Bar
            progress={progress}
            height={10}
            backgroundColor="#fa8"
            color="#f42"
            width={300}
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
        <View style={styles.clearSubject}>
          <RoundButton title="-" size={50} onPress={() => clearSubject()} />
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
  clearSubject: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
});
