import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colores} from '../themes/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({iconName}: Props) => {
  const {changeFavouriteIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavouriteIcon(iconName)}>
      <Text>
        <Icon name={iconName} size={80} color={colores.primary} />;
      </Text>
    </TouchableOpacity>
  );
};
