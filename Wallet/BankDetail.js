import React from 'react';
import {View, StyleSheet, FlatList, AsyncStorage} from 'react-native';
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
  Icon,
  Header,
  Footer,
  FooterTab,
  Badge,
} from 'native-base';
import {LogoGogo} from '../components/Svg/my-wallet-card';
const BankDetail = ({navigation}) => {
  const styles = StyleSheet.create({
    Logo: {
      backgroundColor: 'rgba(24, 160, 251, 1)',
      paddingLeft: 0,
      paddingRight: 8,
      paddingTop: 26,
      paddingBottom: 30,
    },
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
    TextBlue: {
      color: 'rgba(24, 160, 251, 1)',
      fontSize: 14,
      fontWeight: 'bold',
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
      marginLeft: 25,
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
      marginLeft: 20,
    },
    BadgeStayle: {},
    CardItemStyle: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  });
  return (
    <Container>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Left style={{marginLeft: 13}}>
          <Text style={{fontWeight: 'bold'}}>MY WALLET</Text>
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

      <Content noShadow>
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
              <Text style={{color: 'rgba(105, 105, 105, 1)', marginRight: 11}}>
                xxxx xxxx xxxx xxxx
              </Text>
            </Right>
          </CardItem>
          <CardItem>
            <Left style={{flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{color: 'rgba(105, 105, 105, 1)', fontWeight: 'bold'}}>
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
            <Left></Left>
            <Right>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'rgba(105, 105, 105, 1)',
                  marginRight: 8,
                }}>
                บาท
              </Text>
            </Right>
          </CardItem>
        </Card>

        <Text style={styles.TitleText}>ADD A BANK ACCOUNT</Text>

        <Card style={styles.CardAddBank}>
          <CardItem>
            <Body style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.TextBlue}>NEW BANK ACCOUNT</Text>
              <Right>
                <Icon
                  name="add"
                  style={{color: 'rgba(24, 160, 251, 1)'}}
                  onPress={() => navigation.navigate('BankAccoutDetail')}
                />
              </Right>
            </Body>
          </CardItem>
        </Card>
      </Content>

      {/* Footer */}
      <Footer noShadow style={styles.FooterBar}>
        <FooterTab noShadow style={styles.FooterBar}>
          <Button vertical>
            <Icon
              name="home"
              style={styles.IconBar}
              onPress={() => navigation.navigate('RegisGiver')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 15}}>Home</Text>
          </Button>
          <Button vertical>
            <Icon
              name="md-wallet"
              style={{color: '#18A0FB'}}
              onPress={() => navigation.navigate('BankDetail')}
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
              onPress={() => navigation.navigate('MessageScreen')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 15}}>Chat</Text>
          </Button>
          <Button vertical>
            <Icon
              name="md-person"
              style={styles.IconBar}
              onPress={() => navigation.navigate('Profile')}
            />
            <Text style={{color: '#C3C3C3', marginBottom: 10}}>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
};
export default BankDetail;
