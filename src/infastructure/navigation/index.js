import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Navigators } from './app.navigator';
import { AccountNavigator } from './account.navigator';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

export const Navigation = () => {
  const { user } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {user ? <Navigators /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
