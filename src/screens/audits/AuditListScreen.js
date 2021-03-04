import React from 'react';
import {StyleSheet, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {Box} from '../../components/common';

const AuditListScreen = (props) => {
  const auditList = useSelector((state) => state.audit);
  console.log('Audit list State', auditList);
  return (
    <Box styles={styles.screen}>
      <Text> Audit List Screen</Text>
      <Button
        title="To audit Header"
        onPress={() => {
          props.navigation.navigate('AuditHeaderScreen');
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

export default AuditListScreen;
