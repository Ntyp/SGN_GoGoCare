import React, {useState} from 'react';
import FooterBar_Client from '../components/Footer';
import {
  IconCalendar,
  IconClock,
  IconLine,
  IconLocation,
  ViewCalendar,
  ViewTime,
} from '../components/Svg/Client/Icon-Register';
import {
  View,
  StyleSheet,
  Image,
  Picker,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
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
  Grid,
  Row,
  Col,
  Item,
} from 'native-base';
const RegisUserData3 = ({navigation}) => {
  const [Hospital, setHospital] = useState('');
  const [GetPlace, setGetPlace] = useState('');
  const [SendPlace, setSendPlace] = useState('');
  const [CheckGoBack, setCheckGoBack] = useState('');
  const styles = StyleSheet.create({
    inputBox: {
      width: '95%',
      height: 50,
      backgroundColor: '#FFFFFF',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#E8E8E8',
      borderWidth: 0.6,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 16,
    },
    inputStyle: {
      width: '95%',
      height: 50,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      borderColor: '#E8E8E8',
      borderWidth: 0.6,
      borderRadius: 8,
      fontSize: 16,
      marginBottom: 16,
    },
    ContainerStyle: {
      //   paddingLeft: 10,
      //   paddingRight: 10,
    },
    IconBar: {
      color: '#C3C3C3',
    },
    IconMain: {
      color: '#18A0FB',
      alignSelf: 'center',
      fontSize: 20,
    },
    IconStyle: {
      color: '#18A0FB',
      textAlign: 'center',
    },
    ButtonStyle: {
      width: 50,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    CheckBox: {
      width: 20,
      height: 20,
      backgroundColor: '#FFFFFF',
      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 3,
    },
    CheckBoxPress: {
      width: 20,
      height: 20,
      backgroundColor: '#18A0FB',
      borderRadius: 3,
    },
  });
  return (
    <Container style={styles.ContainerStyle}>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>GO HEALTH</Text>
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
        </Right>
      </Header>
      <Content>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#18A0FB',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          จองบริการพาไปพบแพทย์
        </Text>
        <Text style={{fontSize: 16, alignSelf: 'center', marginBottom: 20}}>
          Step 3
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#18A0FB',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          วัน เวลา และสถานที่ที่คุณต้องการใช้บริการ
        </Text>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontSize: 12,
              alignSelf: 'flex-start',
              marginBottom: 20,
            }}>
            กรุณาเลือก วัน เวลา โรงพยาบาลและสถานที่ไป-กลับ
          </Text>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <Text
                style={{fontSize: 12, fontWeight: 'bold', marginBottom: 15}}>
                วันและเวลา ที่ต้องการให้ไปรับ
              </Text>
              <View style={styles.inputStyle}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View
                      style={{
                        alignSelf: 'center',
                        marginRight: 5,
                        marginLeft: 10,
                      }}>
                      <IconCalendar></IconCalendar>
                    </View>
                    <TextInput
                      style={{
                        height: '80%',
                        width: '70%',
                        alignSelf: 'center',
                      }}></TextInput>
                  </View>
                  <View
                    style={{flex: 0.09, alignSelf: 'center', marginRight: 3}}>
                    <IconLine></IconLine>
                  </View>

                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{alignSelf: 'center', marginRight: 5}}>
                      <IconClock></IconClock>
                    </View>
                    <TextInput
                      style={{
                        height: '80%',
                        width: '70%',
                        alignSelf: 'center',
                      }}></TextInput>
                  </View>
                </View>
              </View>
            </View>
            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  alignSelf: 'flex-start',
                  marginBottom: 15,
                }}>
                เวลานัดที่รพ.
              </Text>
              <View style={styles.inputStyle}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginRight: 5,
                      marginLeft: 10,
                    }}>
                    <IconClock></IconClock>
                  </View>
                  <TextInput
                    style={{
                      height: '80%',
                      width: '70%',
                      alignSelf: 'center',
                    }}></TextInput>
                </View>
              </View>
              {/* <ViewTime></ViewTime> */}
            </View>
          </View>
          <Grid>
            {/* <View
              style={{
                width: 220,
                height: 240,
                borderColor: '#E8E8E8',
                borderWidth: 1,
                alignSelf: 'center',
              }}>
              <Form style={{marginLeft: 15, marginRight: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: 173,
                    height: 132,
                    marginBottom: 20,
                  }}></View>
              </Form>
              <View
                style={{
                  width: '100%',
                  borderColor: '#F2F2F2',
                  borderWidth: 1,
                  justifyContent: 'flex-end',
                }}>
                <Form style={{marginLeft: 15, marginRight: 15}}>
                  <Text style={{fontWeight: 'bold'}}>เวลารับ:</Text>
                </Form>
              </View>
            </View> */}
            {/* <ViewCalendar></ViewCalendar> */}

            <Text>สถานที่รับ</Text>
            <View style={styles.inputStyle}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    alignSelf: 'center',
                    marginRight: 5,
                    marginLeft: 10,
                  }}>
                  <IconLocation></IconLocation>
                </View>
                <TextInput
                  style={{
                    height: '80%',
                    width: '78%',
                    alignSelf: 'center',
                  }}></TextInput>
                <Button style={styles.ButtonStyle}>
                  <Icon name="search" style={styles.IconStyle} />
                </Button>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              {/* <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#18A0FB',
                  borderRadius: 3,
                }}></View> */}
              <TouchableOpacity onPress={() => {}} style={{}}>
                {Item.checked == true ? (
                  <View style={styles.CheckBoxPress}></View>
                ) : (
                  <View style={styles.CheckBox}></View>
                )}
              </TouchableOpacity>
              <Text style={{marginLeft: 10, alignSelf: 'center'}}>
                สถานที่ไปรับและกลับที่เดียวกัน
              </Text>
            </View>
            <Text style={{marginBottom: 10}}>โรงพยาบาล</Text>
            <View style={styles.inputStyle}>
              <View style={{flexDirection: 'row'}}>
                <View
                  style={{
                    alignSelf: 'center',
                    marginRight: 5,
                    marginLeft: 10,
                  }}>
                  <IconLocation></IconLocation>
                </View>
                <TextInput
                  style={{
                    height: '80%',
                    width: '78%',
                    alignSelf: 'center',
                  }}></TextInput>
                <Button style={styles.ButtonStyle}>
                  <Icon name="search" style={styles.IconStyle} />
                </Button>
              </View>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                alignSelf: 'center',
                marginBottom: 20,
              }}>
              ตรวจเช็คความถูกต้องของข้อมูลให้เรียบร้อยเพื่อชำระเงินทันที
            </Text>
            <Row>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    backgroundColor: '#fff',
                    borderColor: '#18a0fb',
                    borderWidth: 1,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                  onPress={() => navigation.navigate('RegisUserData2')}>
                  <Text style={{color: '#18a0fb', fontWeight: 'bold'}}>
                    กลับ
                  </Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    backgroundColor: '#18a0fb',
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                  onPress={() => navigation.navigate('Payment')}>
                  <Text style={{fontWeight: 'bold'}}>ยืนยัน</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </Content>
      {/* Footer */}
      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};
export default RegisUserData3;
