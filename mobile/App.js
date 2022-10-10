import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="detail" component={Detail} />
        {/*
      <Stack.Screen name="map" component={MapDefault} />
      <Stack.Screen name="form" component={Form} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
