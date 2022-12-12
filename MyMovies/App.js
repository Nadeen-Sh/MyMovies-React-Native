import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/bottomNavigator';
import {LogBox} from 'react-native';
import Start from './src/Screens/Start';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

function App() {
  const [isVisible, setiIVisible] = React.useState(true);

  const Hide_Splash_Screen = () => {
    setiIVisible(false);
  };

  React.useEffect(() => {
    setTimeout(Hide_Splash_Screen, 4000);
  }, []);

  return (
    <>
      {isVisible === true ? (
        <Start />
      ) : (
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      )}
    </>
  );
}

export default App;
