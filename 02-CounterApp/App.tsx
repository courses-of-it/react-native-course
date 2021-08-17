/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';

// import {HolaMundoScreen} from './src/screens/HolaMundoScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {FlexScreen} from './src/screens/FlexScreen';
// import {StyleSheet} from 'react-native';
import {TareaScreen} from './src/screens/TareaScreen';

export const App = () => {
  return (
    // <View style={styles.con}>
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#28425B',
      }}>
      <TareaScreen />
    </SafeAreaView>
    // </View>
  );
};
