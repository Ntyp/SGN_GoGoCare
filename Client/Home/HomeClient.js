import React from 'react';
import FooterBar_Client from '../../components/Footer';
import {ImgHeader} from '../../components/Svg/Client/Img-Home';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
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
    BgImg: {
      width: '100%',
      height: 241,
      alignSelf: 'center',
      justifyContent: 'flex-end',
      marginTop: 20,
      borderRadius: 8,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
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
        <ImgHeader></ImgHeader>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <ImageBackground
            source={require('../../components/Img/GoGoHealth.jpg')}
            style={styles.BgImg}>
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
          </ImageBackground>
          <ImageBackground
            source={require('../../components/Img/GoGoActive.jpg')}
            style={styles.BgImg}>
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
          </ImageBackground>
        </Form>
      </Content>
      {/* Footer */}
      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};
export default HomeClient;
