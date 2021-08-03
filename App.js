import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screens';
import { theme } from './src/infastructure/theme';
import { SafeArea } from './src/components/utility/safe-area.component';
import { RestaurantContextProvider } from './src/services/restaurants/restaurants.context';
import { LocationContextProvider } from './src/services/locations/location.context';

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settigns</Text>
    </SafeArea>
  );
};

const Maps = () => {
  return (
    <SafeArea>
      <Text>Maps</Text>
    </SafeArea>
  );
};

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = styled(Tab.Navigator).attrs({
  barStyle: {
    backgroundColor: '#fff',
    height: 50,
  },
  activeColor: '#fb8500',
})``;

export default function App() {
  const [oswaldLoded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <TabNavigator>
                <Tab.Screen
                  name="Restaurants"
                  component={RestaurantsScreen}
                  options={{
                    tabBarLabel: 'Restaurants',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="silverware-fork-knife"
                        color={color}
                        size={26}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Maps"
                  component={Maps}
                  options={{
                    tabBarLabel: 'Maps',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="map-search-outline"
                        color={color}
                        size={26}
                      />
                    ),
                  }}
                />
                <Tab.Screen
                  name="Settings"
                  component={Settings}
                  options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons
                        name="cog"
                        color={color}
                        size={26}
                      />
                    ),
                  }}
                />
              </TabNavigator>
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
