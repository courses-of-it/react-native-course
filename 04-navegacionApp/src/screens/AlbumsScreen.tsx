import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {logout, authState} = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Albums</Text>

      {!!authState.isLoggedIn && <Button title="Logout" onPress={logout} />}
    </View>
  );
};
