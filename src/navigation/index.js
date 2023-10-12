import React from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const linking = {
  prefixes: ['shahabazsapp://'],
  config: {
    initialRouteName: 'Home',
    screens: {
      Home: {
        path: 'home',
      },
      Details: {
        path: 'details/:userId',
      },
    },
  },
};

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      linking={linking}
      fallback={<ActivityIndicator color="blue" size="large" />}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
