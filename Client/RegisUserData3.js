import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';
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
  Picker,
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
          <Grid>
            <Row>
              <Col>
                <Text>วันและเวลา ที่ต้องการให้ไปรับ</Text>
              </Col>
              <Col>
                <Text>เวลานัดที่รพ.</Text>
              </Col>
            </Row>
            <Row>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="วันและเวลา ที่ต้องการให้ไปรับ"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="เวลานัดที่รพ."
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row>
            <Text>สถานที่รับ</Text>
            <Row>
              <Col>
                <TextInput
                  style={styles.inputBox}
                  placeholder="สถานที่รับ"
                  placeholderTextColor="#BDBDBD"
                  // onChangeText={text => setAge(text)}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: '#18A0FB',
                    borderRadius: 3,
                    borderColor: '#E8E8E8',
                    borderWidth: 1,
                  }}></View>
              </Col>
              <Col>
                <Text>สถานที่ไปรับและกลับที่เดียวกัน</Text>
              </Col>
              <Col></Col>
            </Row>
            <Text>โรงพยาบาล</Text>
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
      <Footer noShadow style={styles.FooterBar}>
        <FooterTab noShadow style={styles.FooterBar}>
          <Button vertical>
            <Icon
              name="home"
              style={styles.IconBar}
              onPress={() => navigation.navigate('HomeClient')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 15}}>Home</Text>
          </Button>
          <Button vertical>
            <Icon
              name="md-wallet"
              style={{color: '#18A0FB'}}
              onPress={() => navigation.navigate('')}
            />
            <Text style={{color: '#18A0FB', marginBottom: 15}}>Wallet</Text>
          </Button>
          <Button vertical>
            <Icon
              name="ios-receipt"
              style={styles.IconBar}
              onPress={() => navigation.navigate('')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 15}}>My Jobs</Text>
          </Button>
          <Button vertical>
            <Icon
              name="md-chatbox-ellipses"
              style={styles.IconBar}
              onPress={() => navigation.navigate('')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 15}}>Chat</Text>
          </Button>
          <Button vertical>
            <Icon
              name="md-person"
              style={styles.IconBar}
              onPress={() => navigation.navigate('')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 10}}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export default RegisUserData3;
