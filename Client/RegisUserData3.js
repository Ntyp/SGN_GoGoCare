import React from 'react';
import FooterBar_Client from '../components/Footer';
import {IconMap, IconClock} from '../components/Svg/Client/Icon-Register';
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
  Item,
  Input,
  Textarea,
} from 'native-base';
const RegisUserData3 = ({navigation}) => {
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
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',
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
              <TextInput
                style={styles.inputBox}
                placeholder="วันและเวลา ที่ต้องการให้ไปรับ"
                placeholderTextColor="#BDBDBD"
                // onChangeText={text => setAge(text)}
              />
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
              <TextInput
                style={styles.inputBox}
                placeholder="เวลานัดที่รพ."
                placeholderTextColor="#BDBDBD"
                // onChangeText={text => setAge(text)}
              />
            </View>
          </View>
          <Grid>
            <Text>สถานที่รับ</Text>

            {/* <Row>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="สถานที่รับ"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row> */}
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 4, flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputBox}
                  placeholder="สถานที่รับ"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </View>
              <View style={{alignSelf: 'flex-start'}}>
                <Button
                  style={{
                    width: 51,
                    height: 51,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#E8E8E8',
                    borderRadius: 8,
                  }}
                  onPress={() => navigation.navigate('')}>
                  <Icon name="search-sharp" style={styles.IconMain} />
                </Button>
              </View>
            </View>
            <Picker>
              <Picker.Item label="สถานที่ไปรับและกลับที่เดียวกัน" />
            </Picker>
            <View style={{flexDirection: 'row', marginBottom: 20}}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#18A0FB',
                  borderRadius: 3,
                  borderColor: '#E8E8E8',
                  borderWidth: 1,
                }}></View>
              <View>
                <Text style={{marginLeft: 10}}>
                  สถานที่ไปรับและกลับที่เดียวกัน
                </Text>
              </View>
            </View>
            <Text style={{marginBottom: 10}}>โรงพยาบาล</Text>
            <Row>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="โรงพยาบาล"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row>
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
