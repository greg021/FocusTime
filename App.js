import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';
import {Timer} from './src/features/timer/Timer';

const App = () => {
  const [focusSubject, setFocusSubject] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0077ed" />
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusSubject(null);
          }}
          clearSubject={() => setFocusSubject(null)}
        />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0077ed',
  },
});

export default App;
