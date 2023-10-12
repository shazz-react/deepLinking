import React from 'react';
import {ActivityIndicator, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Details from '../screens/Details';

const linking = {
  prefixes: ['shahabazsapp://'],
  async getInitialURL() {
    const url = await Linking.getInitialURL();
    return url;
  },

  // Custom function to subscribe to incoming links
  subscribe(listener) {
    // Listen to incoming links from deep linking
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      listener(url);
    });
    return () => {
      // Clean up the event listeners
      linkingSubscription.remove();
    };
  },
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
