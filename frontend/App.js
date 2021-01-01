
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import giris from './src/giris';
import yenigiris from './src/yenigiris';
import haberekle from './src/haberekle';
import butunhaberler from './src/butunhaberler';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="giris"  component={giris}/>
        <Stack.Screen name="yenigiris"  component={yenigiris}/>
        <Stack.Screen name="haberekle"  component={haberekle}/>
        <Stack.Screen name="butunhaberler"  component={butunhaberler}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
