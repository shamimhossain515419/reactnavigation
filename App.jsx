import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import About from './src/screens/About';
import Search from './src/screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#1a1a2e',
          width: 240,
        },
        drawerActiveTintColor: '#00d4ff',
        drawerInactiveTintColor: '#6c757d',
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: '600',
        },
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
      <Drawer.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size, focused }) => (
            <AntDesign 
              name="home" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Search" 
        component={Search}
        options={{
          title: 'Search',
          drawerIcon: ({ color, size, focused }) => (
            <Feather 
              name="search" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={Profile}
        options={{
          title: 'Profile',
          drawerIcon: ({ color, size, focused }) => (
            <AntDesign 
              name="user" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
      <Drawer.Screen 
        name="About" 
        component={About}
        options={{
          title: 'About',
          drawerIcon: ({ color, size, focused }) => (
            <Feather 
              name="info" 
              size={focused ? 26 : 24} 
              color={color} 
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;