import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LogoSmall } from '../../components/LogoSmall';
import Btn from '../../components/Btn';
import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LogoSmall />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeaderText1}>Hello!</Text>
          <Text style={styles.formHeaderText1}>Welcome</Text>
          <Text>Let's create you account.</Text>
        </View>
        <View style={styles.formInputContaner}>
          <TextInput
            textContentType="username"
            autoComplete="username"
            style={styles.formInput}
            placeholder="juandelacruz"
            onChangeText={text => {
              setCredentials({
                ...credentials,
                username: text,
              });
            }}
          />
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
          <TextInput
            textContentType="password"
            autoComplete="password"
            style={styles.formInput}
            secureTextEntry={!showPassword}
            placeholder="********"
            onChangeText={text => {
              setCredentials({
                ...credentials,
                password: text,
              });
            }}
          />
          <View style={{ position: 'relative' }}>
            <TextInput
              textContentType="none"
              style={styles.formInput}
              secureTextEntry={!showPassword}
              placeholder="********"
              onChangeText={text => {
                setCredentials({
                  ...credentials,
                  confirm_password: text,
                });
              }}
            />
            {showPassword ? (
              <Eye
                onPress={() => {
                  console.log(showPassword);
                  setShowPassword(!showPassword);
                }}
                style={{ position: 'absolute', right: 2, top: 12 }}
              />
            ) : (
              <EyeOff
                onPress={() => {
                  console.log(showPassword);
                  setShowPassword(!showPassword);
                }}
                style={{ position: 'absolute', right: 2, top: 12 }}
              />
            )}
          </View>
        </View>
        <View>
          <Btn title="sign up" style={{ marginTop: 40, marginBottom: 10 }} />
          <Text style={{ textAlign: 'right' }}>Already have an account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <Text
              style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 16 }}
            >
              sign in
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
