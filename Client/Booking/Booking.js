import React, {useState} from 'react';
import {ImgStatusNow} from '../../components/Svg/Client/Img-GoGoNow';
import {ImgStatusLast} from '../../components/Svg/Client/Img-GoGoNow';
import FooterBar_Client from '../../components/Footer';
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
const Booking = ({navigation}) => {
  const [StatusNow, setStatusNow] = useState('กำลังเดินทางไปโรงพยาบาล');
  const [StatusLast, setStatusLast] = useState(
    'เดินทางถึงโรงพยาบาลเรียบร้อยแล้ว',
  );
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
    CardSize: {
      width: 360,
      height: 240,
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
    CardItemStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    },
    CardStatusNow: {
      width: 360,
      height: 100,
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
      justifyContent: 'center',
    },
    CardStatusLast: {
      width: 330,
      height: 80,
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
      justifyContent: 'center',
      alignSelf: 'center',
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
          <Text style={{fontWeight: 'bold', fontSize: 14}}>GOGO NOW</Text>
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
          <Card style={styles.CardSize}>
            <CardItem>
              <Left>
                <View style={styles.Logo}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>
                    GoGo Care
                  </Text>
                </View>
              </Left>
              <Right>
                <Text
                  style={{
                    color: 'rgba(24, 160, 251, 1)',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginRight: 12,
                  }}>
                  CARD
                </Text>
                <Text
                  style={{color: 'rgba(105, 105, 105, 1)', marginRight: 11}}>
                  xxxx xxxx xxxx xxxx
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left style={{flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: 'rgba(105, 105, 105, 1)',
                      fontWeight: 'bold',
                    }}>
                    รายได้เดือน
                  </Text>
                  <Text
                    style={{
                      marginLeft: 0,
                      paddingLeft: 0,
                      color: 'rgba(24, 160, 251, 1)',
                      fontWeight: 'bold',
                    }}>
                    พฤษภาคม
                  </Text>
                </View>
              </Left>
            </CardItem>

            <CardItem style={styles.CardItemStyle}>
              <Left></Left>
              <Right>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 34,
                    color: 'rgba(24, 160, 251, 1)',
                    marginRight: 12,
                  }}>
                  0.00
                </Text>
              </Right>
            </CardItem>

            <CardItem style={styles.CardItemStyle}>
              <Left>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 100,
                    borderWidth: 1,
                    borderColor: '#18A0FB',
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#18A0FB',
                      fontSize: 16,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                    }}>
                    โทรเลย
                  </Text>
                </Button>
              </Left>
              <Right>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: '#18A0FB',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      fontSize: 16,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                    }}>
                    แชทเลย
                  </Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{alignSelf: 'center'}}>รายละเอียดเพิ่มเติม</Text>
              </Body>
            </CardItem>
          </Card>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              alignSelf: 'flex-start',
              marginBottom: 20,
            }}>
            STATUS
          </Text>
          <Card style={styles.CardStatusNow}>
            <CardItem>
              <Left>
                <ImgStatusNow></ImgStatusNow>
              </Left>
              <Body style={{justifyContent: 'flex-start'}}>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#898A8D',
                    fontWeight: 'bold',
                  }}>
                  สถานะ...
                </Text>
                <Text
                  style={{
                    color: '#18A0FB',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {StatusNow}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.CardStatusLast}>
            <CardItem>
              <Left>
                <ImgStatusLast></ImgStatusLast>
              </Left>
              <Body style={{justifyContent: 'flex-start'}}>
                <Text
                  style={{
                    color: '#18A0FB',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  {StatusLast}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            style={{
              alignSelf: 'center',
              borderRadius: 100,
              width: 140,
              height: 50,
              borderColor: '#18A0FB',
              borderWidth: 1,
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 15, color: '#18A0FB'}}>
              ดูสถานะทั้งหมด
            </Text>
          </Button>
        </Form>
      </Content>
      {/* Footer */}
      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};

export default Booking;
