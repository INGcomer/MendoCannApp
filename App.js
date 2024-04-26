// React
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Kitten UI
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text, IconRegistry } from '@ui-kitten/components';
// icons
import { FeatherIconsPack } from './src/Components/feather-icons';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
// Contexts
import { AuthProvider } from './src/Context/AuthContext';
import { AllUsersProvider } from './src/Context/AllUsersContext';
// Navigation
import AppNavigation from './src/Navigation/app.navigation';
// home stack
import HomeStack from './src/Navigation/Stacks/HomeStack';

export default () => (
  <AuthProvider>
    <AllUsersProvider>
      <NavigationContainer>
        {/* <IconRegistry icons={EvaIconsPack} /> */}
        <IconRegistry icons={FeatherIconsPack} />
        <ApplicationProvider {...eva} theme={eva.dark}>

          <HomeStack />

        </ApplicationProvider>
      </NavigationContainer>
    </AllUsersProvider>
  </AuthProvider >
);