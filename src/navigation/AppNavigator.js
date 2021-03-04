import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/user/LoginScreen';
import {MainNavigator, AuditNavigator} from './ShopNavigator';
const MyStack = createStackNavigator();

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
