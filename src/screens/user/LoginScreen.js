import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  ImageBackground,
  StatusBar,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import SQLite from 'react-native-sqlite-storage';
import {authorize} from 'react-native-app-auth';
import {Box} from '../../components/common';
import {BASE_URL, APP_ID} from '@env';

const AuthConfig = {
  appId: '9cc2062b-58d6-4144-9a7b-147dfb9c325a',
  tenantId: '03fa6430-2a3b-4a59-b916-ffb7eb0b395c',
  appScopes: ['openid', 'offline_access', 'profile', 'User.Read', 'email'],
};

const config = {
  warmAndPrefetchChrome: true,
  clientId: AuthConfig.appId,
  redirectUrl: 'graph-tutorial://react-native-auth',
  scopes: AuthConfig.appScopes,
  additionalParameters: {prompt: 'select_account'},
  serviceConfiguration: {
    authorizationEndpoint:
      'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
    tokenEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  },
};

const LoginScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [authToken, setAuthToken] = useState();

  const [error, setError] = useState();
  const db = SQLite.openDatabase({
    name: 'db.sqlite',
    location: 'default',
  });
  const auditList = useSelector((state) => state.audit);

  useEffect(() => {
    if (error) {
      Alert.alert('An error ocurred', error, [{text: 'OK'}]);
    }
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
  }, [error]);
  const loginHandler = async () => {
    setIsLoading(true);
    try {
      console.log('loggg', db);

      (await db).transaction((tx) => {
        tx.executeSql(
          'SELECT name, hired FROM colleagues ORDER BY hired ASC',
          [],
          (ts, result) => {
            console.log('resultado del select', result);
          },
        );
      });

      console.log('props', props);
      const result = await authorize(config);
      console.log('LOG URL', BASE_URL);
      props.navigation.navigate('AuditListScreen');

      await axios
        .post(
          `http://192.168.1.2:54888/api/auth/azure`,
          JSON.stringify(result.idToken),
          {
            headers: {'Content-Type': 'application/json'},
          },
        )
        .then((res) => {
          console.log('API AXIOS RESULT', res);
        });
      setIsLoading(false);
    } catch (error) {
      setError(error.toString());
      setIsLoading(false);
    }
  };
  return (
    <Box flex={1}>
      <StatusBar translucent backgroundColor={'rgba(0,0,0,0.5)'} />
      <ImageBackground
        style={styles.screen}
        resizeMode="cover"
        source={require('./../../../assets/img/login_background.jpg')}>
        <Box bg="rgba(0,0,0,0.6)" style={styles.authContainer}>
          <Box flex={1} alignItems="center" justifyContent="center">
            <Image
              source={require('./../../../assets/img/ic_logo.png')}
              style={styles.logo}
            />
          </Box>
          <Box flex={1} alignItems="center">
            <Text style={styles.loginButtonText}>
              COMPLIANCE AUDIT APPLICATION
            </Text>
          </Box>
          <Box
            flex={1}
            alignItems="center"
            justifyContent="center"
            mt={StatusBar.currentHeight}>
            {isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <TouchableOpacity
                onPress={loginHandler}
                style={styles.loginButton}
                activeOpacity={0.5}>
                <Image
                  source={require('./../../../assets/img/office365.png')}
                  style={styles.loginButtonImage}
                />
                <Text style={styles.loginButtonText}>Sign in With TEGRA</Text>
              </TouchableOpacity>
            )}
          </Box>
        </Box>
      </ImageBackground>
    </Box>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
  },
  authContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  logo: {
    width: '70%',
    height: '30%',
    resizeMode: 'center',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b72025',
    height: 40,
    borderRadius: 20,
    margin: 5,
  },
  loginButtonImage: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  loginButtonText: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
    fontSize: 15,

    fontFamily: 'Lato-Bold',
  },
});

export default LoginScreen;
