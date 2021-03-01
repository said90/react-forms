import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box} from '../../components/common';

const AuditHeaderScreen = (props) => {
  return (
    <Box styles={styles.screen}>
      <Text> Audit Header Screen</Text>
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
