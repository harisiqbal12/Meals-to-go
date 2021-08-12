import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeArea } from '../../components/utility/safe-area.component';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import styled from 'styled-components/native';
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screens';

const Settings = () => {
  return (
    <SafeArea>
      <Text>Settigns</Text>
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

export const Navigators = () => {
  return (
    <TabNavigator>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsNavigator}
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
        component={MapScreen}
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
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </TabNavigator>
  );
};
