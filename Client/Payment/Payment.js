import React, {useState} from 'react';
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
const Payment = ({navigation}) => {
  const [Bank, setBank] = useState(''); //ธนาคาร
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
    TextBlack: {
      fontSize: 14,
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
      justifyContent: 'center',
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
    <Container>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>PAYMENT</Text>
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
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgba(24, 160, 251, 1)',
              marginBottom: 30,
            }}>
            เลือกวิธีเพื่อชำระเงินทันที
          </Text>
          <Grid>
            <Row style={{marginBottom: 25}}>
              <Col>
                <Text style={styles.TextBlack}>ชำระค่าบริการ</Text>
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    alignSelf: 'center',
                    marginRight: 30,
                    color: 'rgba(24, 160, 251, 1)',
                  }}>
                  1200
                </Text>
              </Col>
              <Col>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    alignSelf: 'flex-end',
                    marginRight: 30,
                  }}>
                  บาท
                </Text>
              </Col>
            </Row>
          </Grid>
          {/* <View
            style={{
              width: 326,
              height: 70,
              borderRadius: 8,
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.5,
              shadowRadius: 10,
              elevation: 5,
            }}>
            <Grid>
              <Row>
                <Col>
                  <Text>VISA</Text>
                </Col>
                <Col>
                  <Text>**** **** **** 8043</Text>
                </Col>
                <Col>
                  <View style={styles.GreenCircle}>
                    <Icon name="checkmark-outline" style={styles.GreenIcon} />
                  </View>
                </Col>
              </Row>
              <Row>
                <Col></Col>
                <Col>
                  <Text>Expires 10/25</Text>
                </Col>
                <Col></Col>
              </Row>
            </Grid>
          </View> */}

          <Card style={styles.CardAddBank}>
            <CardItem>
              <Body style={{flex: 1, flexDirection: 'row'}}>
                <Left>
                  <Text style={styles.TextBlue}>VISA</Text>
                </Left>
                <Body>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#696969',
                      alignSelf: 'flex-start',
                    }}>
                    **** **** **** 8043
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: '#979797',
                      alignSelf: 'flex-start',
                    }}>
                    Expires 10/25
                  </Text>
                </Body>
                <Right>
                  <Icon
                    name="add"
                    style={{color: 'rgba(24, 160, 251, 1)'}}
                    onPress={() => navigation.navigate('RegisGiver')}
                  />
                </Right>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.CardAddBank}>
            <CardItem>
              <Body style={{flex: 1, flexDirection: 'row'}}>
                <Left>
                  <Text style={styles.TextBlue}>PROMPT PAY</Text>
                </Left>
                <Body>
                  <Text
                    style={{
                      fontSize: 14,
                      color: '#696969',
                      alignSelf: 'flex-start',
                    }}>
                    ******7490
                  </Text>
                </Body>
                <Right>
                  {/* <Icon
                    name="add"
                    style={{color: 'rgba(24, 160, 251, 1)'}}
                    onPress={() => navigation.navigate('RegisGiver')}
                  /> */}
                </Right>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.CardAddBank}>
            <CardItem>
              <Body
                style={{
                  flex: 1,
                  flexDirection: 'row',
                }}>
                <Left>
                  <Text style={styles.TextBlue}>MOBILE BANKING</Text>
                </Left>
                <Body></Body>
                <Right>
                  <Picker
                    selectedValue={Bank}
                    style={{height: 50, width: '100%'}}
                    onValueChange={(itemValue, itemIndex) =>
                      setBank(itemValue)
                    }>
                    <Picker.Item label="กสิกรไทย" value="Kasikorn" />
                    <Picker.Item label="ไทยพาณิชย์" value="Scb" />
                    <Picker.Item label="กรุงเทพ" value="Bangkok" />
                    <Picker.Item label="กรุงไทย" value="KrungThai" />
                  </Picker>
                </Right>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.CardAddBank}>
            <CardItem>
              <Body style={{flex: 1, flexDirection: 'row'}}>
                <Left>
                  <Text style={styles.TextBlue}>NEW CRADIT CARD</Text>
                </Left>
                <Right>
                  <Icon
                    name="add"
                    style={{color: 'rgba(24, 160, 251, 1)'}}
                    onPress={() => navigation.navigate('AddCard')}
                  />
                </Right>
              </Body>
            </CardItem>
          </Card>
          <Grid>
            <Row style={{marginTop: 10}}>
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
                    marginBottom: 20,
                  }}
                  onPress={() => navigation.navigate('')}>
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
                    marginBottom: 20,
                  }}
                  onPress={() => navigation.navigate('Confirm')}>
                  <Text style={{fontWeight: 'bold'}}>ชำระเงินเลย!</Text>
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

export default Payment;
