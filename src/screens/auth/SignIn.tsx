import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { LogoSmall } from '../../components/LogoSmall';
import Btn from '../../components/Btn';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LogoSmall />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formHeaderContainer}>
          <Text style={styles.formHeaderText1}>Hi!</Text>
          <Text style={styles.formHeaderText1}>Welcome</Text>
          <Text>Please enter your credentials</Text>
        </View>
        <View style={styles.formInputContaner}>
          <TextInput
            style={styles.formInput}
            placeholder="juandelacruz@email.com"
          ></TextInput>
          <TextInput
            style={styles.formInput}
            secureTextEntry={true}
            placeholder="********"
          ></TextInput>
          <TouchableWithoutFeedback>
            <Text style={{ textAlign: 'right' }}>Forgot Password?</Text>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <Btn title="sign in" style={{ marginTop: 40, marginBottom: 10 }} />
          <TouchableWithoutFeedback>
            <Text style={{ textAlign: 'right' }}>
              Don't have an account? Sign up
            </Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <Text
              style={{ textAlign: 'right', fontWeight: 'bold', fontSize: 16 }}
            >
              sign up
            </Text>
          </TouchableWithoutFeedback>
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
  },
});
