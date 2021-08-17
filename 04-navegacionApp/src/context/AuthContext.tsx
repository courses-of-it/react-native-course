// definir la informacion
import React from 'react';
import {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// estado inicial

export const authInitialState: AuthState = {
  isLoggedIn: false,
};

// lo usaremos para especificar como luce i expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavouriteIcon: (iconName: string) => void;
  changeUserName: (username: string) => void;
}

// crear el context
export const AuthContext = createContext({} as AuthContextProps);

// componente proveedor del estado

export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavouriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeUserName = (username: string) => {
    dispatch({type: 'setUserName', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavouriteIcon,
        logout,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
