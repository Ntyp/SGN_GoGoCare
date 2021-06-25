import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Icon, Container, Body, Header, Left, Right, Title} from 'native-base';

import ImgPerson from '../assets/images/jonas-kakaroto-wNaVqDIDG8k-unsplash.jpg';
import {black} from 'react-native-paper/lib/typescript/styles/colors';
const ChatScreen = ({navigation, route}) => {
  const {userName} = route?.params || {};
  const {userImg} = route?.params || {};
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'มาได้เลยค่ะพร้อมแล้ว',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: ImgPerson, //Can't Change Avatar Pic ;
        },
      },
      {
        _id: 2,
        text: 'สวัสดีค่ะ คุณสุจิตรา',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 3,
        text: 'กำลังจะไปรับที่บ้านนะคะ',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = props => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: 'rgba(24, 160, 251, 1)',
          },
          left: {
            backgroundColor: 'rgba(233, 233, 235, 1)',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
          left: {
            color: '#000',
          },
        }}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <FontAwesome name="angle-double-down" size={22} color="#333" />;
  };

  return (
    <View style={{flex: 1}}>
      <Header style={{backgroundColor: 'rgba(249, 249, 249, 0.94)'}}>
        <Left style={{flex: 1}}>
          <View style={styles.LeftHeader}>
            {/* <Button onPress={() => navigation.navigate('MessageScreen')}>
              icon={<Icon name="chevron-back" size={15} color="#18A0FB" />}
              title="Back"
            </Button> */}
            <Icon
              name="chevron-back"
              style={{color: '#18A0FB'}}
              onPress={() => navigation.navigate('MessageScreen')}
            />
            <Text style={{fontSize: 17, color: '#18A0FB'}}>Back</Text>
          </View>
        </Left>

        <Body style={{flex: 2, alignItems: 'center'}}>
          <Title style={{fontSize: 18, color: '#000', textAlign: 'center'}}>
            {userName}
          </Title>
        </Body>

        <Right style={{flex: 1}}>
          <Icon
            name="ellipsis-horizontal-sharp"
            style={{color: '#18A0FB'}}
            onPress={() => navigation.navigate('')}
          />
        </Right>
      </Header>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LeftHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

{
  /* <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    /> */
}
