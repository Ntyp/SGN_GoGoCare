import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
} from 'native-base';
import profile from '../assets/images/profile.png';
import {useState} from 'react';
import CalendarForm from './svg/calendarThumbnail';
import {HomeJobWave} from './svg/wave';
import {useNavigation} from '@react-navigation/native';
const JobCard = () => {
  const navigation = useNavigation();

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
      width: 228,
      height: 260,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      borderColor: '#FFF',
      borderRadius: 10,
      overflow: 'hidden',
      position: 'relative',
    },
    WaveStyle: {position: 'absolute', top: 0, left: 0, zIndex: 0},
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
    SexAgeStyle: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
    },
    bottomMenu: {
      marginTop: 10,
      flex: 1,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      borderBottomStartRadius: 10,
      borderBottomEndRadius: 10,
    },
  });

  return (
    <Container style={{marginLeft: 20}}>
      <Content>
        <Card style={styles.CardStyle}>
          <HomeJobWave style={styles.WaveStyle} />
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
          <CardItem>
            <Left>
              <Body>
                <Text style={{fontSize: 10}}>สถานที่</Text>
                <Text
                  style={{fontSize: 12, fontWeight: 'bold', color: 'black'}}>
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
                <Text
                  style={{
                    marginTop: 14,
                    textDecorationLine: 'underline',
                    fontSize: 10,
                    color: '#18A0FB',
                  }}>
                  รายละเอียดเพิ่มเติม
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

          <CardItem style={styles.bottomMenu}>
            <Button
              style={{
                backgroundColor: '#18A0FB',
                alignSelf: 'center',
                width: '50%',
                borderBottomStartRadius: 10,
                paddingBottom: 18,
              }}
              onPress={() => navigation.navigate('MyJobs')}>
              <Text style={{paddingLeft: 40, fontWeight: 'bold'}}>รับงาน</Text>
            </Button>
            <Button
              transparent
              style={{
                alignSelf: 'center',
                width: '50%',
                backgroundColor: '#FFF',
                borderRadius: 0,
                borderBottomEndRadius: 10,
                paddingBottom: 18,
              }}>
              <Text
                style={{
                  color: '#18A0FB',
                  fontWeight: 'bold',
                  paddingLeft: 30,
                }}>
                ไม่รับงาน
              </Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};
export default JobCard;
