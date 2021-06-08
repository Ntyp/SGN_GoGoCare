import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Grid,
  Col,
} from 'native-base';
import profile from '../assets/images/profile.png';
import {useState} from 'react';
import CalendarForm from './SvgComponent';

const JobCard = () => {
  const [Patient, setPatient] = useState({
    name: 'สุจิตรา',
    lastname: 'ศรีสุวานนท์',
    sex: 'หญิง',
    age: 79,
    location: 'โรงพยาบาลศิริราช',
    time: '6:00',
    day: 'พุธ',
    daynum: 11,
    month: 'มิถุนายน',
  });
  return (
    <Container style={{marginRight:20}}>
      <Content>
        <Card
          style={{
            width: 240,
            height: 260,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 1,
            borderColor: '#FFF',
            borderRadius:"30 30 30 30",
          }}>
          <CardItem style={{marginLeft:-1,backgroundColor: '#18A0FB'}}>
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
                  <Text
                    style={{color: 'white', fontSize: 12, fontWeight: 'bold'}}>
                    {Patient.sex} {Patient.age}
                  </Text>{' '}
                  ปี
                </Text>
              </Body>
            </Left>
            <Right>
              <Thumbnail large source={profile} />
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
                  style={{fontSize: 12, fontWeight: 'bold', color: '#18A0FB'}}>
                  เวลา {Patient.time} น.
                </Text>
                <Text
                  style={{
                    marginTop: 14,
                    textDecorationLine: 'underline',
                    fontSize: 10,
                    color: '#18A0FB'
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

          <CardItem style={{marginTop: 10, marginLeft: -18, flex: 1}}>
            <Button
              style={{
                backgroundColor: '#18A0FB',
                alignSelf: 'center',
                width: 120,
              }}>
              <Text style={{paddingLeft: 40, fontWeight: 'bold'}}>รับงาน</Text>
            </Button>
            <Button transparent style={{alignSelf: 'center', width: 120}}>
              <Text
                style={{color: '#18A0FB', fontWeight: 'bold', paddingLeft: 30}}>
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