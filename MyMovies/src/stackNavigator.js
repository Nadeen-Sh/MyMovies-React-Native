import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './Screens/Home Screen/HomeScreen';
import MovieDetails from './Screens/Details Screen/MovieDetails';
import themeStyle from './theme.style';
import SearchScreen from './Screens/Search Screen/SearchScreen';
import SavedMovies from './Screens/SavedMovie Screen/SavedMovie';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: themeStyle.background.BACKGROUND_COLOR,
        },
      }}
      initialRouteName="home">
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="details" component={MovieDetails} />
    </Stack.Navigator>
  );
};

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: themeStyle.background.BACKGROUND_COLOR,
        },
      }}>
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
  );
};
const SevedStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: themeStyle.background.BACKGROUND_COLOR,
        },
      }}>
      <Stack.Screen name="saved" component={SavedMovies} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, SearchStackNavigator, SevedStackNavigator};
