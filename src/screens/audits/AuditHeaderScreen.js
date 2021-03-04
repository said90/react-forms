import React from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import {Box} from '../../components/common';

const AuditHeaderScreen = (props) => {
  return (
    <Box styles={styles.screen}>
      <Text> Audit Header Screen</Text>
      <Button
        title="To audit Audit Question Screen"
        onPress={() => {
          props.navigation.navigate('AuditQuestionScreen');
        }}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuditHeaderScreen;
