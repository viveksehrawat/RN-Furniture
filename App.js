import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import SignUp from './src/screens/auth/Signup';

const App = () => {
  return (
    <SafeAreaView>
      <SignUp />
    </SafeAreaView>
  );
};

export default App;
