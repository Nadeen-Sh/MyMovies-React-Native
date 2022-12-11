import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/bottomNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
