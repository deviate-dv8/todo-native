import { Image, StyleSheet, Text, View } from 'react-native';
import Btn from '../components/Btn';
import { useNavigation } from '@react-navigation/native';
export default function LandingScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/images/cropped_logo.png")} />
        <Text style={styles.logoText}>askmone</Text>
      </View>
      <Text>Your ultimate solution for a productivity app</Text>
      <Btn style={{ margin: 10 }} title="sign in" onPress={() => {
        navigation.navigate('SignIn')
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white",
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode:'contain'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    left: -10,
  },
});
