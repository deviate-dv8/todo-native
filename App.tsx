/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/navigation/config';
function App() {
  return (
    <NavigationContainer>
      <RootStack/>
    </NavigationContainer>
  
  );
}

export default App;
