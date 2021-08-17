import {AuthState, authInitialState} from './AuthContext';

type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'setUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'logout':
      return {
        ...authInitialState,
      };

    case 'setUserName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};
