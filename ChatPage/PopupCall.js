import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  Container,
  Item,
  Title,
  Form,
  Input,
  Button,
  Center,
  Left,
  Right,
  Body,
  Header,
  Footer,
  Icon,
  Badge,
  Row,
  FooterTab,
  Content,
} from 'native-base';
const PopupCall = ({navigation}) => {
  const styles = StyleSheet.create({
    ContentBar: {
      backgroundColor: '#E5E5E5',
    },
    IconBar: {},
    CustomButton: {
      backgroundColor: 'rgba(255, 58, 68, 1)',
      borderRadius: 50,
    },
    ButtonStandard: {
      backgroundColor: '#E5E5E5',
    },
  });
  return (
    <Container>
      <Header>
        <Text style={styles.HeaderBar}>MY CHAT</Text>
        {/* IMG */}
      </Header>
      <View style={styles.ContentBar}>
        <Button style={styles.ButtonStandard}>
          <Icon name="md-mic" />
          <Text>Mute</Text>
        </Button>
        <Button style={styles.ButtonStandard}>
          <Icon />
          <Text></Text>
        </Button>
        <Button style={styles.ButtonStandard}>
          <Icon name="volume-medium" />
          <Text>Turn on speaker</Text>
        </Button>
      </View>
    </Container>
  );
};
export default PopupCall;
