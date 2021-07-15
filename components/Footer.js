import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Button, Footer, FooterTab} from 'native-base';
import {
  IconHome,
  IconHistory,
  IconGogonow,
  IconChat,
  IconProfile,
} from './Svg/Client/Icon-FooterClient';
import {useNavigation} from '@react-navigation/native';

const FooterBar_Client = ({home, history, gogonow, chat, profile}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    FooterBar: {
      height: 70,
      backgroundColor: '#FBFBFB',
      paddingTop: 10,
      marginTop: 0,
    },
  });
  return (
    <Footer noShadow>
      <FooterTab noShadow style={styles.FooterBar}>
        <Button
          vertical
          styles={{marginBottom: 15}}
          onPress={() => navigation.navigate('HomeClient')}>
          <IconHome current={home} />
          <Text
            style={
              home
                ? {marginBottom: 15, fontSize: 10, color: '#18A0FB'}
                : {marginBottom: 15, fontSize: 10, color: '#C3C3C3'}
            }>
            Home
          </Text>
        </Button>
        <Button
          vertical
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('')}>
          <IconHistory current={history} />
          <Text
            style={
              history
                ? {fontSize: 10, color: '#18A0FB'}
                : {fontSize: 10, color: '#C3C3C3'}
            }>
            History
          </Text>
        </Button>
        <Button
          vertical
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('Booking')}>
          <IconGogonow current={gogonow} />
          <Text
            style={
              gogonow
                ? {fontSize: 10, color: '#18A0FB'}
                : {fontSize: 10, color: '#C3C3C3'}
            }>
            GoGo Now
          </Text>
        </Button>
        <Button
          vertical
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('')}>
          <IconChat current={chat} />
          <Text
            style={
              chat
                ? {fontSize: 10, color: '#18A0FB'}
                : {fontSize: 10, color: '#C3C3C3'}
            }>
            Chat
          </Text>
        </Button>
        <Button
          vertical
          style={{marginBottom: 15}}
          onPress={() => navigation.navigate('ProfileClient')}>
          <IconProfile current={profile} />
          <Text
            style={
              profile
                ? {fontSize: 10, color: '#18A0FB'}
                : {fontSize: 10, color: '#C3C3C3'}
            }>
            Profile
          </Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};
export default FooterBar_Client;
