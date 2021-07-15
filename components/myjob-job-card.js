import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
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
import CalendarForm from './Svg/calendarThumbnail';
import {MyJobWave} from './Svg/Wave';
import {useNavigation} from '@react-navigation/native';
import PatientInfo from './myjob-patient-detail';
const JobCard = params => {
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
      width: 370,
      height: params.jobStatus == 2 ? 700 : 260,
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
    acceptButton: {
      backgroundColor: '#06E775',
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
    },
    callnowBtn: {
      backgroundColor: '#FFFFFF',
      borderColor: '#18A0FB',
      borderWidth: 1,
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
      marginRight: 10,
    },
    chatnowBtn: {
      backgroundColor: '#18A0FB',
      alignSelf: 'center',
      width: 140,
      borderRadius: 50,
    },
  });
  return (
    <Container>
      <ScrollView
        scrollEnabled={params.jobStatus == 2 ? true : false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Content>
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
              {params.jobStatus == 0 ? (
                <Button
                  style={styles.acceptButton}
                  onPress={() => params.setjobStatus(1)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      paddingLeft: 50,
                    }}>
                    เริ่มงาน
                  </Text>
                </Button>
              ) : (
                <>
                  <Button style={styles.callnowBtn}>
                    <Text
                      style={{
                        color: '#18A0FB',
                        fontWeight: 'bold',
                        paddingLeft: 48,
                      }}>
                      โทรเลย
                    </Text>
                  </Button>
                  <Button style={styles.chatnowBtn}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        paddingLeft: 48,
                      }}>
                      แชทเลย
                    </Text>
                  </Button>
                </>
              )}
            </CardItem>
            {params.jobStatus != 2 && (
              <Text
                style={{
                  marginTop: 2,
                  textDecorationLine: 'underline',
                  fontSize: 12,
                  color: '#18A0FB',
                  alignSelf: 'center',
                }}
                onPress={() => params.setjobStatus(2)}>
                รายละเอียดเพิ่มเติม
              </Text>
            )}
            {params.jobStatus == 2 && (
              <PatientInfo setjobStatus={params.setjobStatus} />
            )}
          </Card>
        </Content>
      </ScrollView>
    </Container>
  );
};
export default JobCard;
