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
  Input,
  Form,
  Badge,
} from 'native-base';
import {LogoGogo} from '../components/Svg/my-wallet-card';
const BankAccoutDetail = ({navigation}) => {
  const styles = StyleSheet.create({
    Logo: {
      backgroundColor: 'rgba(24, 160, 251, 1)',
      paddingLeft: 0,
      paddingRight: 8,
      paddingTop: 26,
      paddingBottom: 30,
    },
    HeaderText: {
      fontWeight: 'bold',
      marginLeft: 10,
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
      marginTop: 30,
      marginLeft: 25,
    },
    SubText: {
      fontWeight: 'bold',
      fontSize: 16,
      paddingBottom: 20,
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
    inputBox: {
      width: '90%',
      height: 50,
      backgroundColor: 'rgba(232, 232, 232, 1)',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: 'rgba(232, 232, 232, 1)',
      borderWidth: 0.6,
      borderRadius: 8,
      fontSize: 16,
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 16,
    },
    Form: {
      paddingLeft: 5,
      paddingRight: 15,
    },
    Button: {
      backgroundColor: '#00ec66',
      width: '90%',
      height: 50,
      borderRadius: 50,
      marginTop: 10,
      alignSelf: 'center',
    },
  });
  return (
    <Container>
      <Header noShadow style={{backgroundColor: 'white', marginLeft: 0}}>
        <Body>
          <Text style={styles.HeaderText}>BANK ACCOUNT DETAILS</Text>
        </Body>
      </Header>

      <Content noShadow>
        <Card style={styles.CardAddBank}>
          <CardItem>
            <Body style={{flex: 1, flexDirection: 'row'}}>
              <Text style={styles.TextBlue}>SCB</Text>
              <Right>
                <Text>xxxx xxxx xxxx xxxx</Text>
              </Right>
            </Body>
          </CardItem>
        </Card>

        <Form style={styles.Form}>
          <Text style={styles.TitleText}>BANK ACCOUNT NAME</Text>
          <Input
            placeholderTextColor="rgba(189, 189, 189, 1)"
            style={styles.inputBox}
            placeholder="Name"
          />
          <Text style={styles.SubText}>BANK ACCOUNT NO.</Text>
          <Input
            placeholderTextColor="rgba(189, 189, 189, 1)"
            style={styles.inputBox}
            placeholder="No."
          />
          <Text style={styles.SubText}>EXPIRY DATE</Text>
          <Input
            placeholderTextColor="rgba(189, 189, 189, 1)"
            style={styles.inputBox}
            placeholder="MM/YY"
          />
          <Button
            block
            style={styles.Button}
            onPress={() => navigation.navigate('BankDetail')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              บันทึกบัญชี
            </Text>
          </Button>
        </Form>
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
              onPress={() => navigation.navigate('ShowCard')}
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
export default BankAccoutDetail;
