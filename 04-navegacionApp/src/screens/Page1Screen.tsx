import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles, colores} from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colores.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page1Screen</Text>

      <Button
        title="ir a página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>
        Navegar con argumentos
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Icon name="male-outline" color="white" size={35} />

          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Icon name="female-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
