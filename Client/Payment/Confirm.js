import React, {useState} from 'react';
import FooterBar_Client from '../../components/Footer';
import JobCard_Client from '../../components/Svg/Client/Confirm-Booking';
import profile from '../../assets/images/profile.png';
import CalendarForm from '../../components/Svg/calendarThumbnail';
import {MyJobWave} from '../../components/Svg/Wave';
import ConfirmBooking from '../../components/Svg/Client/Confirm-Booking';
import {View, StyleSheet, Image, TextInput, Picker} from 'react-native';
import {
  Container,
  Content,
  Text,
  Button,
  Icon,
  Header,
  Badge,
  Form,
} from 'native-base';
const Confirm = ({navigation}) => {
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
    TextBlue: {
      color: 'rgba(24, 160, 251, 1)',
      fontSize: 14,
      fontWeight: 'bold',
    },
    IconBar: {
      color: '#C3C3C3',
    },
    ButtonStyle: {
      alignSelf: 'center',
      borderRadius: 100,
      width: 343,
      height: 50,
      justifyContent: 'center',
      backgroundColor: '#18A0FB',
      marginTop: 20,
    },
  });
  return (
    <Container>
      <Header
        noShadow
        style={{backgroundColor: 'white', marginLeft: 0, marginTop: 10}}>
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
          <ConfirmBooking></ConfirmBooking>
          <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}}>
            หมายเลขการจอง G02024
          </Text>
          <Text style={{fontSize: 12, fontWeight: '500', alignSelf: 'center'}}>
            กรุณารอการยืนยันผู้ดูแลของคุณภายใน 4 ชั่วโมง
          </Text>
          <Button style={styles.ButtonStyle}>
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
