import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { LogoSmall } from '../../components/LogoSmall';
import Btn from '../../components/Btn';
import { Eye, EyeOff } from 'lucide-react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LogoSmall />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeaderText1}>Hi!</Text>
          <Text style={styles.formHeaderText1}>Welcome</Text>
          <Text>Please enter your credentials.</Text>
        </View>
        <View style={styles.formInputContaner}>
          <TextInput
            textContentType="emailAddress"
            inputMode="email"
            autoComplete="email"
            style={styles.formInput}
            placeholder="juandelacruz@email.com or juandelacruz"
            onChangeText={text => {
              setCredentials({
                ...credentials,
                email: text, // Update the email field
              });
            }}
          />
          <View style={{ position: 'relative' }}>
            <TextInput
              textContentType="password"
              autoComplete="password"
              style={styles.formInput}
              secureTextEntry={!showPassword} // Toggle visibility
              placeholder="********"
              onChangeText={text => {
                setCredentials({
                  ...credentials,
                  password: text,
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
          <Pressable>
            <Text style={{ textAlign: 'right' }}>Forgot Password?</Text>
          </Pressable>
        </View>
        <View>
          <Btn title="sign in" style={{ marginTop: 40, marginBottom: 10 }} />
          <Text style={{ textAlign: 'right' }}>
            Don't have an account? Sign up
          </Text>
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
