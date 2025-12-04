import React from 'react';
import Home from "./src/screens/Home"
import Profile from "./src/screens/Profile"
import About from "./src/screens/About"
import Search from "./src/screens/Search"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='About' component={About} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
       <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;