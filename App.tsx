import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

//const Tab = createBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor:'#0080ff'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle:{
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown : false,
            
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



export default App;