import React, {useState} from 'react';
import profile from '../../../assets/images/profile.png';
import CalendarForm from '../../Svg/calendarThumbnail';
import {BigWave} from '../Wave';
import {CorrectIcon} from './Img-GoGoNow';
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
const GogonowCard = ({navigation}) => {
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
    ButtonWhite: {
      width: 140,
      height: 50,
      borderRadius: 100,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#18A0FB',
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    ButtonBlue: {
      width: 140,
      height: 50,
      borderRadius: 100,
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    GreenBox: {
      backgroundColor: 'rgba(6, 231, 117, 0.5)',
      paddingLeft: 0,
      paddingTop: 8,
      paddingBottom: 8,
      paddingRight: 60,
      borderRadius: 200,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      position: 'absolute',
      marginTop: 65,
      justifyContent: 'flex-start',
    },
    GreenText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
      alignSelf: 'center',
      marginRight: 5,
    },
    GreenIcon: {
      color: '#fff',
      alignSelf: 'center',
      marginTop: 2,
      borderRadius: 100,
      fontSize: 20,
      textAlign: 'center',
    },
    GreenCircle: {
      borderRadius: 300,
      width: 28,
      height: 28,
      backgroundColor: '#06E775',
      alignSelf: 'center',
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
      textAlign: 'center',
      marginRight: 5,
    },
    ImgStyle: {
      width: 98,
      height: 98,
      borderRadius: 100,
      alignSelf: 'center',
    },
  });
  return (
    <Form style={{marginLeft: 20, marginRight: 20}}>
      <Card style={styles.CardStyle}>
        <BigWave style={styles.WaveStyle} />
        <CardItem style={styles.CardHeader}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1.7}}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginBottom: 10,
                }}>
                สวัสดีค่ะ
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginBottom: 10,
                }}>
                {Patient.name} {Patient.lastname}
              </Text>
              <Text
                note
                style={{color: 'white', fontSize: 12, marginBottom: 10}}>
                เพศ{' '}
                <Text style={styles.SexAgeStyle}>
                  {Patient.sex} {Patient.age}
                </Text>{' '}
                ปี
              </Text>
              <Text style={styles.SexAgeStyle}>ผู้ดูแลส่วนตัวของคุณ</Text>
            </View>
            <View style={{flex: 1}}>
              <Thumbnail style={styles.ImgStyle} source={profile} />
              <View style={styles.GreenBox}>
                <View style={{flexDirection: 'row', paddingLeft: 5}}>
                  <View style={styles.GreenCircle}>
                    <Icon name="checkmark-outline" style={styles.GreenIcon} />
                  </View>
                  <Text style={styles.GreenText}>ยืนยันตัวตนแล้ว</Text>
                </View>
              </View>
            </View>
          </View>
        </CardItem>
        <CardItem
          style={{
            flexDirection: 'row',
            paddingTop: 0,
            marginTop: 10,
            marginBottom: 0,
            paddingBottom: 0,
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Button style={styles.ButtonWhite}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#18A0FB',
                  }}>
                  โทรเลย
                </Text>
              </Button>
            </View>
            <View style={{flex: 1}}>
              <Button style={styles.ButtonBlue}>
                <Text
                  style={{
                    fontWeight: 'bold',
                  }}>
                  แชทเลย
                </Text>
              </Button>
            </View>
          </View>
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

export default GogonowCard;
