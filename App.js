import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {Focus} from './src/features/focus/Focus';

const App = () => {
  const [focusSubject, setFocusSubject] = useState('Gardening');
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0077ed" />
      {focusSubject ? (
        <Text>{focusSubject}</Text>
      ) : (
        <Focus setFocusSubject={setFocusSubject} focusSubject={focusSubject} />
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
