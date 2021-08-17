import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {authState, signIn} = useContext(AuthContext);
  const {isLoggedIn} = authState;
  return (
    <View>
      <Text style={styles.title}>Contacts</Text>
      {!isLoggedIn && <Button title="Sign in" onPress={signIn} />}
    </View>
  );
};
