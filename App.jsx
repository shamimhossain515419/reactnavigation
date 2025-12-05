import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import About from './src/screens/About';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1a1a2e',
          borderTopWidth: 0,
          elevation: 8,
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: '#00d4ff',
        tabBarInactiveTintColor: '#6c757d',
        headerStyle: {
          backgroundColor: '#16213e',
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
      }}
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign 
              name="home" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={Search}
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather 
              name="search" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign 
              name="user" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Tab.Screen 
        name="About" 
        component={About}
        options={{
          title: 'About',
          tabBarIcon: ({ color, size, focused }) => (
            <Feather 
              name="info" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;