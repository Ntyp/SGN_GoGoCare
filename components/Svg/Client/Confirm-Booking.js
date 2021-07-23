import React, {useState} from 'react';
import profile from '../../../assets/images/profile.png';
import CalendarForm from '../../Svg/calendarThumbnail';
import {MyJobWave} from '../Wave';
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
  Badge,
  Form,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';
const ConfirmBooking = ({navigation}) => {
  const [Patient, setPatient] = useState({
    name: 'สุจิตรา',
    lastname: 'ศรีสุวานนท์',
    sex: 'หญิง',
    age: 79,
    location: 'โรงพยาบาลศิริราช',
    time: '6:00',
    day: 'พ.',
    daynum: 12,
    month: 'พ.ค.',
  });

  const styles = StyleSheet.create({
    CardStyle: {
      height: 260,
      width: 327,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderColor: '#FFF',
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
      alignSelf: 'center',
      marginBottom: 20,
    },
    CardHeader: {
      marginLeft: 0,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomStartRadius: 0,
      borderBottomEndRadius: 0,
      zIndex: 1,
      top: 0,
      left: 0,
      position: 'absolute',
      backgroundColor: 'transparent',
    },
    WaveStyle: {position: 'absolute', top: 0, left: 0, zIndex: 0},
    SexAgeStyle: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
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
    <Form style={{marginLeft: 20, marginRight: 20}}>
      <Card style={styles.CardStyle}>
        <MyJobWave style={styles.WaveStyle} />
        <CardItem style={styles.CardHeader}>
          <Left>
            <Body>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {Patient.name}
              </Text>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {Patient.lastname}
              </Text>
              <Text note style={{color: 'white', fontSize: 12}}>
                เพศ{' '}
                <Text style={styles.SexAgeStyle}>
                  {Patient.sex} {Patient.age}
                </Text>{' '}
                ปี
              </Text>
            </Body>
          </Left>
          <Right>
            <Thumbnail source={profile} />
          </Right>
        </CardItem>
        <CardItem style={{paddingBottom: 5}}>
          <Left>
            <Body>
              <Text style={{fontSize: 10}}>สถานที่</Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                {Patient.location}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#18A0FB',
                }}>
                เวลา {Patient.time} น.
              </Text>
            </Body>
          </Left>
          <Right>
            <CalendarForm
              day={Patient.day}
              daynum={Patient.daynum}
              month={Patient.month}
            />
          </Right>
        </CardItem>
        <CardItem
          style={{
            flexDirection: 'row',
            paddingTop: 0,
            marginBottom: 0,
            paddingBottom: 0,
            alignSelf: 'center',
          }}>
          <Button
            style={{
              width: 140,
              height: 50,
              borderRadius: 100,
              backgroundColor: '#18A0FB',
              alignSelf: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              ดูประวัติผู้ดูแล
            </Text>
          </Button>
        </CardItem>
        <CardItem style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 12,
              color: '#18A0FB',
              textDecorationLine: 'underline',
            }}>
            รายละเอียดเพิ่มเติม
          </Text>
        </CardItem>
      </Card>
      {/* <JobCard_Client></JobCard_Client> */}
    </Form>
  );
};

export default ConfirmBooking;
