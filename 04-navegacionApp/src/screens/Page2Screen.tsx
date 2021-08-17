import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../themes/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      title: 'Hola mundo',
      headerBackTitle: '',
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>page 2 screen</Text>
      <Button
        title="ir a página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />
    </View>
  );
};
