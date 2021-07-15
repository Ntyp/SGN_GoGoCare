import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './WelcomePage/Welcome';
import SignupScreen from './WelcomePage/Signup';
import LogInScreen from './WelcomePage/Login';
import AskLocationServiceScreen from './WelcomePage/AskLocationService';
import HomePageScreen from './HomePage/Home';

// Client

// Home
import HomeClient from './Client/Home/HomeClient';
import GoHealth from './Client/Home/GoHealth';
import GoActive from './Client/Home/GoActive';

// Register

import RegisUserData1 from './Client/RegisUserData1';
import RegisUserData2 from './Client/RegisUserData2';
import RegisUserData3 from './Client/RegisUserData3';

// Payment
import Payment from './Client/Payment/Payment';
import AddCard from './Client/Payment/AddCard';
import Confirm from './Client/Payment/Confirm';

// Profile
import ProfileClient from './Client/Profile/ProfileClient';
import ProfileClient1 from './Client/Profile/ProfileClient1';
import ProfileClient2 from './Client/Profile/ProfileClient2';
import ProfileClientSetting from './Client/Profile/ProfileClientSetting';

// Booking
import Booking from './Client/Booking/Booking';

//CareGiver

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
        {/* Client */}
        {/* Home */}
        <Stack.Screen
          name="HomeClient"
          component={HomeClient}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoHealth"
          component={GoHealth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GoActive"
          component={GoActive}
          options={{headerShown: false}}
        />
        {/* Register */}
        <Stack.Screen
          name="RegisUserData1"
          component={RegisUserData1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisUserData2"
          component={RegisUserData2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisUserData3"
          component={RegisUserData3}
          options={{headerShown: false}}
        />
        {/* Payment */}
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCard"
          component={AddCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{headerShown: false}}
        />
        {/* Booking */}
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{headerShown: false}}
        />
        {/* ProfileClient */}

        <Stack.Screen
          name="ProfileClient"
          component={ProfileClient}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileClient1"
          component={ProfileClient1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileClient2"
          component={ProfileClient2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileClientSetting"
          component={ProfileClientSetting}
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
