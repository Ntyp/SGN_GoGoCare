import React, {useState} from 'react';
import FooterBar_Client from '../../components/Footer';
import JobCard_Client from '../../components/Svg/Client/Confirm-Booking';
import {View, StyleSheet, Image, TextInput, Picker} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Left,
  Body,
  Right,
  Icon,
  Header,
  Footer,
  FooterTab,
  Badge,
  Form,
  Grid,
  Row,
  Col,
  Card,
  CardItem,
} from 'native-base';
const Confirm = ({navigation}) => {
  const [Bank, setBank] = useState(''); //ธนาคาร
  const styles = StyleSheet.create({
    GreenIcon: {
      color: '#fff',
      fontSize: 18,
      alignSelf: 'flex-end',
      marginTop: 2,
      marginBottom: 2,
      marginLeft: 2,
      marginRight: 2,
    },
    GreenCircle: {
      backgroundColor: '#06E775',
      width: 23,
      height: 23,
      borderRadius: 300,
      marginRight: 5,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
    },
    TextBlue: {
      color: 'rgba(24, 160, 251, 1)',
      fontSize: 14,
      fontWeight: 'bold',
    },
    CardAddBank: {
      width: 360,
      height: 60,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderColor: '#FFF',
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      marginBottom: 20,
    },
    IconBar: {
      color: '#C3C3C3',
    },
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',
    },
  });
  return (
    <Container>
      <Header
        noShadow
        style={{backgroundColor: 'white', marginLeft: 0, marginTop: 10}}>
        {/* <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>CONFIRM BOOKING</Text>
        </Left>
        <Right style={{marginRight: 23}}>
          <Icon
            name="notifications"
            style={{color: '#BDBDBD', transform: [{rotate: '20deg'}]}}
            onPress={() => navigation.navigate('')}
          />
          <Badge
            style={{
              position: 'absolute',
              top: -9,
              right: -10,
              scaleX: 0.6,
              scaleY: 0.6,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 20}}>3</Text>
          </Badge>
        </Right> */}
        <View style={{flex: 2}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>
            CONFIRM BOOKING
          </Text>
        </View>
        <View style={{marginRight: 10}}>
          <Icon
            name="notifications"
            style={{color: '#BDBDBD', transform: [{rotate: '20deg'}]}}
            onPress={() => navigation.navigate('')}
          />
          <Badge
            style={{
              position: 'absolute',
              top: -9,
              right: -10,
              scaleX: 0.6,
              scaleY: 0.6,
              borderColor: 'white',
            }}>
            <Text style={{fontSize: 20}}>3</Text>
          </Badge>
        </View>
      </Header>
      <Content>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#18A0FB',
              marginBottom: 20,
            }}>
            ยืนยันการจองบริการของคุณแล้ว
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 10}}>
            ขอขอบคุณที่จองบริการกับเรา
          </Text>

          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 10,
              alignSelf: 'center',
              color: '#18A0FB',
            }}>
            Go Health บริการพาไปพบแพทย์
          </Text>
          {/* <View
            style={{
              height: 260,
              width: 327,
              backgroundColor: '#D1D5DB',
              alignSelf: 'center',
              justifyContent: 'flex-end',
              borderRadius: 8,
              marginBottom: 30,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 5,
            }}></View> */}
          <JobCard_Client></JobCard_Client>
          <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}}>
            หมายเลขการจอง G02024
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', alignSelf: 'center'}}>
            กรุณารอการยืนยันผู้ดูแลของคุณภายใน 4 ชั่วโมง
          </Text>
          <Button
            style={{
              alignSelf: 'center',
              borderRadius: 100,
              width: 343,
              height: 50,
              justifyContent: 'center',
              backgroundColor: '#18A0FB',
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              ไปที่หน้าการจองของฉัน
            </Text>
          </Button>
        </Form>
      </Content>
      {/* Footer */}
      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};

export default Confirm;
