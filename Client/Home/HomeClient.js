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
} from 'native-base';
const HomeClient = ({navigation}) => {
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
    imgView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    img: {
      height: 150,
      width: 150,
      borderRadius: 80,
      borderWidth: 4,
      borderColor: '#fff',
      alignSelf: 'center',
      backgroundColor: '#D1D5DB',
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
          <Text style={{fontWeight: 'bold', fontSize: 18}}>BOOKING NOW!</Text>
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
        <View
          style={{
            width: '100%',
            height: 100,
            backgroundColor: '#00A1FF',
            marginBottom: 20,
          }}></View>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <View
            style={{
              height: 241,
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
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Go Health
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginBottom: 15,
                }}>
                บริการพาไปพบแพทย์
              </Text>
              <Button
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#18A0FB',
                  width: 140,
                  height: 51,
                  borderRadius: 100,
                  alignSelf: 'center',
                  marginBottom: 20,
                }}
                onPress={() => navigation.navigate('GoHealth')}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>จองเลย!</Text>
              </Button>
            </View>
          </View>
          <View
            style={{
              height: 241,
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
            }}>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: 'bold',
                }}>
                Go Active
              </Text>
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  color: '#fff',
                  fontWeight: 'bold',
                  marginBottom: 15,
                }}>
                บริการพาไปทำกิจกรรม
              </Text>
              <Button
                style={{
                  justifyContent: 'center',
                  backgroundColor: '#18A0FB',
                  width: 140,
                  height: 51,
                  borderRadius: 100,
                  alignSelf: 'center',
                  marginBottom: 20,
                }}
                onPress={() => navigation.navigate('GoActive')}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>จองเลย!</Text>
              </Button>
            </View>
          </View>
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
export default HomeClient;
