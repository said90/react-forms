import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginScreen from '../screens/user/LoginScreen';
import AuditListScreen from '../screens/audits/AuditListScreen';
import AuditHeaderScreen from '../screens/audits/AuditHeaderScreen';
import AuditQuestionListScreen from '../screens/audits/AuditQuestionListScreen';
import AuditQuestionScreen from '../screens/audits/AuditQuestionScreen';

const LoginStackNavigator = createStackNavigator();

export const LoginNavigator = () => {
  return (
    <LoginStackNavigator.Navigator>
      <LoginStackNavigator.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
    </LoginStackNavigator.Navigator>
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
