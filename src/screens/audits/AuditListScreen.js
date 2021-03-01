import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Box} from '../../components/common';

const AuditListScreen = (props) => {
  return (
    <Box styles={styles.screen}>
      <Text> Audit List Screen</Text>
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

export default AuditListScreen;
