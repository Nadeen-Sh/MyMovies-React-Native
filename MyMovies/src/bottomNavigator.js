import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MainStackNavigator,
  SearchStackNavigator,
  SevedStackNavigator,
} from './stackNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'ios-home-outline' : 'ios-home';
          } else if (route.name === 'search') {
            iconName = focused ? 'search' : 'search';
          } else if (route.name === 'watch list') {
            iconName = focused ? 'md-bookmark-outline' : 'md-bookmark';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0296E5',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarOptions={{
        activeTintColor: '#0296E5',
        inactiveTintColor: '#0296E5',
        activeBackgroundColor: '#242A32',
        inactiveBackgroundColor: '#242A32',
        showIcon: true,
        style: {
          backgroundColor: '#242A32',
          paddingBottom: 3,
        },
      }}>
      <Tab.Screen name="home" component={MainStackNavigator} />
      <Tab.Screen
        name="watch list"
        component={SevedStackNavigator}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen name="search" component={SearchStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
