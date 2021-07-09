import React, {useState} from 'react';
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
const AddCard = ({navigation}) => {
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
  });
  return (
    <Container>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>ADD CREDIT CARD</Text>
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
              color: '#18A0FB',
              marginBottom: 20,
            }}>
            กรอกรายละเอียดบัตร
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 10}}>
            ชื่อบัตร
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 10}}>
            หมายเลขบัตร
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#E8E8E8',
            }}
          />
          <Grid>
            <Row>
              <Col>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginBottom: 10}}>
                  วันหมดอายุ
                </Text>
                <TextInput
                  style={{
                    width: '90%',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#E8E8E8',
                    marginBottom: 40,
                  }}
                />
              </Col>
              <Col>
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginBottom: 10}}>
                  เลข CVV
                </Text>
                <TextInput
                  style={{
                    width: '90%',
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#E8E8E8',
                    marginBottom: 40,
                  }}
                />
              </Col>
            </Row>
          </Grid>

          <Grid>
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
                  onPress={() => navigation.navigate('Payment')}>
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
                  <Text style={{fontWeight: 'bold'}}>บันทึก</Text>
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

export default AddCard;
