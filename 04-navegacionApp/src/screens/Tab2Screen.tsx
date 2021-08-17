import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export const Tab2Screen = () => {
  useEffect(() => {
    console.log('2');
  }, []);

  return (
    <View>
      <Text>tab2Screen</Text>
    </View>
  );
};
