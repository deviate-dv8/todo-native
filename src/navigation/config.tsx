import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LandingScreen from "../screens/LandingScreen";
import SignIn from "../screens/auth/SignIn";

export type RootStackParamList = {
	Landing: undefined;
	SignIn: undefined;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootStack() {
	return (
	<Stack.Navigator initialRouteName="Landing">
		<Stack.Screen name="Landing" component={LandingScreen}/>
		<Stack.Screen name="SignIn" component={SignIn} />
	</Stack.Navigator>
	)
}
