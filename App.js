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

import ChatScreen from './ChatPage/ChatScreen';
import MessageScreen from './ChatPage/MessageScreen';
import ChatPage from './ChatPage/ChatPage';
import PopupCall from './ChatPage/PopupCall';

import ShowCard from './Wallet/ShowCard';
import BankDetail from './Wallet/BankDetail';
import BankAccoutDetail from './Wallet/BankAccoutDetail';

// Profile
import Profile from './MyProfile/Profile';
import ProfileSkills from './MyProfile/ProfileSkills';
import ProfileSetup from './MyProfile/ProfileSetup';

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
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}} //Set Username Header 'Chat'
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PopupCall"
          component={PopupCall}
          options={{headerShown: false}}
        />

        {/* Wallet */}
        <Stack.Screen
          name="ShowCard"
          component={ShowCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankDetail"
          component={BankDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankAccoutDetail"
          component={BankAccoutDetail}
          options={{headerShown: false}}
        />

        {/* Profile */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileSkills"
          component={ProfileSkills}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileSetup"
          component={ProfileSetup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
