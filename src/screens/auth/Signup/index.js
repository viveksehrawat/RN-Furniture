import React, {useState} from 'react';
import {Text, Image, View, ScrollView} from 'react-native';

import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  const onSign = () => {
    console.log('Hello');
  };

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John" />
      <Input label="E-mail" placeholder="example@gmail.com" />
      <Input label="Password" placeholder="********" isPassword={true} />
      <View style={styles.agreeRow}>
        <Checkbox checked={checked} onCheck={setChecked} />
        <Text style={styles.agreeText}>
          I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
          <Text style={styles.agreeTextBold}>Privacy</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign Up" />
      <Separator text="Or sign up with" />
    </ScrollView>
  );
};

export default SignUp;
