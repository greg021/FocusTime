import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Focus} from './src/features/focus/Focus';
import {FocusHistory} from './src/features/focus/focusHistory';
import {Timer} from './src/features/timer/Timer';
import {uuidv4} from './src/utils/uuid';

const App = () => {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const saveFocusHistory = async () => {
    try {
      AsyncStorage.setItem('focusHistory', JSON.stringify(focusHistory));
    } catch (e) {
      console.log(e);
    }
  };
  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem('focusHistory');

      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0077ed" />
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            setFocusHistory([
              ...focusHistory,
              {subject: focusSubject, status: 1, key: uuidv4()},
            ]);
            setFocusSubject(null);
          }}
          onCancel={() => {
            setFocusHistory([
              ...focusHistory,
              {subject: focusSubject, status: 0, key: uuidv4()},
            ]);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory
            focusHistory={focusHistory}
            setFocusHistory={setFocusHistory}
          />
        </>
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
