import React, {useEffect, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {fontSizes, spacings} from '../utils/sizes';
import {colors} from '../utils/colors';

const minutesToMillis = min => min * 1000 * 60;
const formatTime = time => (time < 10 ? `0${time}` : time);

export const Countdown = ({
  minutes = 1.2,
  isPaused,
  onStart = () => {},
  onPause = () => {},
  onEnd = () => {},
  onProgress = () => {},
}) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));
  const interval = React.useRef(null);

  const countDown = () =>
    setMillis(time => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress((millis / minutesToMillis(minutes)) * 100);
    if (millis === 0) {
      onEnd();
    }
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      onPause();
      if (interval.current) clearInterval(interval.current);
      return;
    }
    onStart();
    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.textPrimary,
    padding: spacings.lg,
    backgroundColor: colors.secondary,
  },
});
