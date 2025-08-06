import { Image, StyleSheet, Text, View } from "react-native"

export function LogoSmall() {
	return (
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/images/cropped_logo.png")} />
        <Text style={styles.logoText}>askmone</Text>
      </View>
	)
}

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    resizeMode:'contain'
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    left: -5,
  },
})
