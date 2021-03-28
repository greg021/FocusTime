import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {RoundButton} from '../../components/RoundButton';
import {fontSizes, spacings} from '../../utils/sizes';

export const Focus = ({addSubject}) => {
  const [tmp, setTmp] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to Focus on?</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onSubmitEditing={({nativeEvent}) => {
            setTmp(nativeEvent.text);
          }}
        />
        <RoundButton title="+" size={50} onPress={() => addSubject(tmp)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'center',
  },
  titleContainer: {
    marginHorizontal: spacings.md,
  },
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: spacings.md,
    marginHorizontal: spacings.md,
  },
  input: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    fontSize: fontSizes.md,
    marginRight: spacings.sm,
  },
});
