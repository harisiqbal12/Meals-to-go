import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Account Screen</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Account Login</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  );
};
