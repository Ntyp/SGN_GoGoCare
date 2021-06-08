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
} from 'native-base';
const ChatPage = ({navigation}) => {
  const styles = StyleSheet.create({
    Container: {
      flex: 1,
    },
    NameUser: {
      color: 'black',
      fontSize: 18,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    HeaderBar: {
      backgroundColor: '#F9F9F9',
    },
    InputChat: {
      backgroundColor: 'white',
      borderColor: '#E5E5EA',
      borderRadius: 10,
      width: '80%',
    },
    FooterBar: {
        height:150,
      backgroundColor: '#F9F9F9',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  return (
    <Container>
      <View style={{flex: 1}}>
        <Header style={styles.HeaderBar}>
          <Left>
            <View>
              <Icon
                name="arrow-back"
                style={{color: '#18A0FB'}}
                onPress={() => navigation.navigate('')}
              />
            </View>
          </Left>
          <Body style={{flex: 1}}>
            <Title style={styles.NameUser}>สุจิตรา ศรีสุวานนท์</Title>
          </Body>
          <Right>
            <Icon
              name="ellipsis-horizontal-sharp"
              style={{color: '#18A0FB'}}
              onPress={() => navigation.navigate('')}
            />
          </Right>
        </Header>
      </View>
      <View style={{flex: 8}}></View>
      <View style={{flex: 1}}>
        <View style={styles.FooterBar}>
          <ScrollView></ScrollView>
          <View>
            <Row>
              
                <Icon
                  name="add-sharp"
                  style={{color: '#18A0FB'}}
                  onPress={() => navigation.navigate('')}
                />
              
              
                <TextInput
                  style={styles.InputChat}
                  placeholder="Write a comment"
                  placeholderTextColor="#3C3C43"
                  onChangeText={text => setChat(text)}
                />
              
              
                <Icon
                  name="mic-outline"
                  style={{color: '#18A0FB'}}
                  onPress={() => navigation.navigate('')}
                />
              
            </Row>
          </View>
        </View>
      </View>
    </Container>
  );
};
export default ChatPage;
