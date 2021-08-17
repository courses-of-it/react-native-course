import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page 3 screen</Text>
      <Button title="regresar" onPress={() => navigation.pop()} />
      <Button title="ir a página 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
