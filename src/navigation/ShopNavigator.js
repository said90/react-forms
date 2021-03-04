import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/user/LoginScreen';
import AuditListScreen from '../screens/audits/AuditListScreen';
import AuditHeaderScreen from '../screens/audits/AuditHeaderScreen';
import AuditQuestionListScreen from '../screens/audits/AuditQuestionListScreen';
import AuditQuestionScreen from '../screens/audits/AuditQuestionScreen';

const MainStackNavigator = createStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator>
      <MainStackNavigator.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <MainStackNavigator.Screen
        options={{headerShown: false}}
        name="AuditListScreen"
        component={AuditListScreen}
      />
      <MainStackNavigator.Screen
        name="AuditHeaderScreen"
        component={AuditHeaderScreen}
      />
      <MainStackNavigator.Screen
        name="AuditQuestionListScreen"
        component={AuditQuestionListScreen}
      />
      <MainStackNavigator.Screen
        name="AuditQuestionScreen"
        component={AuditQuestionScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

const AuditStackNavigator = createStackNavigator();

export const AuditNavigator = () => {
  return (
    <AuditStackNavigator.Navigator>
      <AuditStackNavigator.Screen
        name="AuditListScreen"
        component={AuditListScreen}
      />
      <AuditStackNavigator.Screen
        name="AuditHeaderScreen"
        component={AuditHeaderScreen}
      />
      <AuditStackNavigator.Screen
        name="AuditQuestionListScreen"
        component={AuditQuestionListScreen}
      />
      <AuditStackNavigator.Screen
        name="AuditQuestionScreen"
        component={AuditQuestionScreen}
      />
    </AuditStackNavigator.Navigator>
  );
};
