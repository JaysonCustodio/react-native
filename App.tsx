import React, { useEffect, useState } from 'react';

import { LoginForm, Loader, Dashboard } from "./src/components"
import api from "./src/api"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
  const [message, setMessage] = useState('connecting')

  const initiazed = async () => {
    const { message } = await api.initializeApp()
    setMessage(message)
    console.log("Connected");
  }

  useEffect(() => {
    initiazed()
  }, [])

  const Stack = createStackNavigator()

  // return message === 'OK' ? (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName='login' screenOptions={{ headerShown: false }}>
  //       <Stack.Screen name='login' component={LoginForm} />
  //       <Stack.Screen name='dashboard' component={Dashboard} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // ) : (<Loader />)

  return (<Loader />)

};


export default App;
