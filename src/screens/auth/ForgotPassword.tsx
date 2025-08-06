
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LogoSmall } from '../../components/LogoSmall';
import Btn from '../../components/Btn';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [credentials, setCredentials] = useState({
    email: '',
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LogoSmall />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeaderText1}>Oh No!</Text>
          <Text style={styles.formHeaderText1}>I forgot</Text>
          <Text>Enter your email address to reset your password.</Text>
        </View>
        <View style={styles.formInputContaner}>
          <TextInput
            textContentType="emailAddress"
            inputMode="email"
            autoComplete="email"
            style={styles.formInput}
            placeholder="juandelacruz@email.com"
            onChangeText={text => {
              setCredentials({
                ...credentials,
                email: text,
              });
            }}
          />
        </View>
        <View>
          <Btn title="submit" style={{ marginTop: 40, marginBottom: 10 }} />
          <Text style={{ textAlign: 'right' }}>Don't have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text
              style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 16 }}
            >
              sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  headerContainer: {
    // backgroundColor: 'red',
    padding: 10,
    alignItems: 'flex-end',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  formHeaderContainer: {
    // backgroundColor: 'green',
  },
  formHeaderText1: {
    // backgroundColor: 'yellow',
    includeFontPadding: false,
    fontSize: 48,
    fontWeight: 'bold',
  },
  formInputContaner: {
    marginTop: 20,
  },
  formInput: {
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    marginRight: 48,
  },
});
