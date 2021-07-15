import React, {useState} from 'react';
import FooterBar_Client from '../../components/Footer';
import {
  View,
  StyleSheet,
  FlatList,
  AsyncStorage,
  Image,
  TextInput,
} from 'react-native';
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
import {LogoGogo} from '../components/Svg/my-wallet-card';
const ProfileClient2 = ({navigation}) => {
  const [Client, setClient] = useState({
    Name: 'นฤวดี ศรีสุวานนท์ ',
    Phone: '086-555xxxx',
  });
  const [User, setUser] = useState({
    Name: 'สุจิตรา ศรีสุวานนท์',
    Sex: 'หญิง',
    Age: '79',
    ImgUrl: '',
  });
  const styles = StyleSheet.create({
    HeaderStyle: {
      backgroundColor: '#fff',
    },
    HeaderBar: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    TitleBar: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
    ContentImg: {
      height: '25%',
      backgroundColor: 'rgba(24, 160, 251, 1)',
    },
    img: {
      height: 120,
      width: 120,
      borderRadius: 80,
      marginTop: 30,
    },
    MainChoicePage: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    ChoicePage: {
      color: 'rgba(229, 229, 229, 1)',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    ChoiceMain: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignSelf: 'center',
      borderBottomColor: 'rgba(255, 255, 255, 1)',
      borderBottomWidth: 3,
    },
    Topic: {
      fontWeight: 'bold',
      marginLeft: 30,
    },
    LineTopic: {
      borderBottomColor: 'rgba(202, 204, 207, 1)',
      borderBottomWidth: 1,
    },
    RowStyle: {
      marginTop: 20,
      paddingBottom: 20,
      borderBottomColor: 'rgba(202, 204, 207, 1)',
      borderBottomWidth: 0.5,
    },
    RowBottom: {
      marginTop: 20,
      paddingBottom: 20,
    },
    FooterBar: {
      height: 85,
      backgroundColor: 'rgba(249, 249, 249, 0.94)',

      //   flex: 1,
    },
    IconBar: {
      color: '#C3C3C3',
    },
    TitleText: {
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 20,
      marginTop: 40,
      marginLeft: 25,
    },
    Button: {
      backgroundColor: '#18A0FB',
      width: '90%',
      height: 50,
      borderRadius: 50,
      marginTop: 20,
      alignSelf: 'center',
      marginBottom: 20,
    },
    GreenBox: {
      backgroundColor: 'rgba(6, 231, 117, 0.5)',
      paddingBottom: 5,
      paddingTop: 5,
      paddingLeft: 5,
      paddingRight: 70,
      borderRadius: 200,
      alignSelf: 'center',
      flexDirection: 'row',
      marginLeft: 20,
    },
    GreenText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 12,
      alignSelf: 'center',
    },
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
      borderRadius: 300,
      marginRight: 5,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
    },
    FormStyle: {
      marginLeft: 20,
      marginRight: 20,
    },
    CardAddBank: {
      width: 360,
      height: 70,
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
    TextTopic: {
      fontSize: 16,
      color: '#18A0FB',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    InputStyle: {
      width: 343,
      height: 50,
      borderWidth: 1,
      borderColor: '#E8E8E8',
      borderRadius: 8,
      marginBottom: 20,
    },
    TextHead: {
      fontSize: 16,
      color: '#18A0FB',
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
    },
  });
  return (
    <Container>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>MY PROFILE</Text>
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

      <View style={styles.ContentImg}>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 20}}>
          <Left style={{flex: 1, marginLeft: 20}}>
            <View>
              <View
                style={{
                  width: 98,
                  height: 98,
                  backgroundColor: '#DADADA',
                  borderRadius: 100,
                  marginTop: 50,
                }}></View>
              <Badge
                style={{
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  left: 30,
                  top: -30,
                  scaleX: 0.8,
                  scaleY: 0.8,
                  borderRadius: 20,
                  width: 40,
                  height: 40,
                }}>
                <Icon
                  name="camera"
                  style={{color: '#C4C4C4', fontSize: 30}}
                  onPress={() => navigation.navigate('Welcome')}
                />
              </Badge>
            </View>
          </Left>
          <Body style={{flex: 2, marginLeft: 25}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              {Client.Name}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 14,
                alignSelf: 'flex-start',
                marginBottom: 10,
              }}>
              {Client.Phone}
            </Text>
          </Body>
        </View>

        <Grid>
          <Row>
            <Col style={{justifyContent: 'flex-end', marginBottom: 10}}>
              <Text style={styles.ChoiceMain}>โปรไฟล์ส่วนตัว</Text>
            </Col>
            <Col style={{justifyContent: 'flex-end', marginBottom: 10}}>
              <Text
                style={styles.ChoiceMain}
                onPress={() => navigation.navigate('ProfileClientSetting')}>
                การตั้งค่า
              </Text>
            </Col>
          </Row>
        </Grid>
      </View>

      <Content noShadow>
        <Form style={styles.FormStyle}>
          <Text style={styles.TextHead}>ข้อมูลผู้ที่ต้องการการดูแล</Text>
          <Card
            style={{
              width: 326,
              height: 170,
              borderRadius: 8,
              alignSelf: 'center',
              marginBottom: 30,
            }}>
            <CardItem>
              <View style={{flex: 2}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {User.Name}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{fontSize: 14, fontWeight: '500'}}>
                    เพศ {User.Sex}
                  </Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '500', marginLeft: 20}}>
                    อายุ {User.Age} ปี
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    backgroundColor: '#DADADA',
                    borderRadius: 100,
                  }}></View>
              </View>
            </CardItem>

            <Button
              style={{
                width: 153,
                height: 51,
                borderRadius: 100,
                backgroundColor: '#18A0FB',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                ข้อมูลสุขภาพ
              </Text>
            </Button>
          </Card>

          <Card style={styles.CardAddBank}>
            <CardItem>
              {/* <Body style={{flex: 1, flexDirection: 'row'}}>
                <Left>
                  <Text style={styles.TextBlue}>
                    เพิ่มคนที่คุณต้องการให้ดูแล
                  </Text>
                </Left>
                <Right>
                  <Icon
                    name="add"
                    style={{color: 'rgba(24, 160, 251, 1)'}}
                    onPress={() => navigation.navigate('AddCard')}
                  />
                </Right>
              </Body> */}
              <View style={{flex: 2}}>
                <Text
                  style={{fontSize: 16, color: '#18A0FB', fontWeight: 'bold'}}>
                  เพิ่มคนที่คุณต้องการให้ดูแล
                </Text>
              </View>
              <View>
                <Icon
                  name="add"
                  style={{color: 'rgba(24, 160, 251, 1)'}}
                  onPress={() => navigation.navigate('ProfileClient1')}
                />
              </View>
            </CardItem>
          </Card>
        </Form>
      </Content>

      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};
export default ProfileClient2;
