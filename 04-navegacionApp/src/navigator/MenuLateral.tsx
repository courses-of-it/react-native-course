import * as React from 'react';

import {Tabs} from './Tabs';
import {SettingsScreen} from '../screens/SettingsScreen';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useWindowDimensions, Text, View, Image} from 'react-native';
import {styles} from '../themes/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://www.wsy.dk/wp-content/uploads/2016/01/Avatar-placeholder.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* menu options */}
      <View>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={23} />
          <Text style={styles.menuTexto}>Navegacion Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon name="cog-outline" size={23} />
          <Text style={styles.menuTexto}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
