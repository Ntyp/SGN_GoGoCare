import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './WelcomePage/Welcome';
import SignupScreen from './WelcomePage/Signup';
import LogInScreen from './WelcomePage/Login';
import AskLocationServiceScreen from './WelcomePage/AskLocationService';
import HomePageScreen from './HomePage/Home';

import RegisGiver from './CareGiver/RegisGiver';
import RegisGiver1 from './CareGiver/RegisGiver1';
import RegisGiver2 from './CareGiver/RegisGiver2';

import ChatPage from './ChatPage/ChatPage';
import ChatList from './ChatPage/ChatList';
import PopupCall from './ChatPage/PopupCall';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AskLocationService"
          component={AskLocationServiceScreen}
          options={{headerShown: false}}
        />

        {/* CareGiver */}

        <Stack.Screen
          name="RegisGiver"
          component={RegisGiver}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisGiver1"
          component={RegisGiver1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisGiver2"
          component={RegisGiver2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePageScreen"
          component={HomePageScreen}
          options={{headerShown: false}}
        />

        {/* ChatPage */}
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PopupCall"
          component={PopupCall}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
