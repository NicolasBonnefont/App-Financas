import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection'

import AuthProvider from './src/contexts/auth'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AuthProvider>
        <StatusBar barStyle='light-content' backgroundColor='#131313' />


        <Routes />


      </AuthProvider>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
