import React from 'react';
import {StyleSheet, Text, FlatList, View} from 'react-native';

import {fontSizes, spacings} from '../../utils/sizes';
import {RoundButton} from '../../components/RoundButton';
import {colors} from '../../utils/colors';

export const FocusHistory = ({focusHistory, setFocusHistory}) => {
  const clearHistory = () => {
    setFocusHistory([]);
  };

  return (
    <>
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Text style={{fontSize: fontSizes.lg, color: colors.textPrimary}}>
          Things we've focused on
        </Text>
        {!!focusHistory.length && (
          <FlatList
            style={{
              width: '100%',
              height: '100%',
              marginTop: spacings.sm,
            }}
            contentContainerStyle={{alignItems: 'center'}}
            data={focusHistory}
            renderItem={({item, index}) => (
              <Text style={styles.historyItem(item.status)}>
                {item.subject}
              </Text>
            )}
          />
        )}
        {!focusHistory.length && (
          <Text style={{color: colors.textSecondary}}>Nothing yet</Text>
        )}
      </View>
      <View style={styles.clearContainer}>
        <RoundButton
          size={70}
          factor={3.8}
          title="clear"
          onPress={() => clearHistory()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: status => ({
    color: status > 0 ? colors.success : colors.danger,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  }),
  clearContainer: {
    alignItems: 'center',
    padding: spacings.md,
  },
});
