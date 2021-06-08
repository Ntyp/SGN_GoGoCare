/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {
  Container,
  Content,
  Button,
  View,
  Text,
  StyleProvider,
} from 'native-base';

import background from './shadow.png';
const Welcome = ({navigation}) => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#FBFAFA',
    },
    shadow: {
      flex: 1,
      width: null,
      height: null,
    },
    bg: {
      flex: 1,
      marginTop: deviceHeight / 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 30,
      bottom: 30,
    },
    text: {
      alignSelf: 'center',
      fontSize: 19,
      color: '#A6A6A6',
    },
    textGroup: {
      marginTop: 10,
    },
    Headtext: {
      alignSelf: 'center',
      fontSize: 42,
      fontWeight: 'bold',
      color: '#18A0FB',
      paddingBottom: 10,
    },
    btn: {
      backgroundColor: '#18A0FB',
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
    },
    btnOutline: {
      backgroundColor: '#FFF',
      borderColor: '#18A0FB',
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
    },
    btnGroup: {
      marginTop: 30,
    },
  });

  return (
    <Container>
      <View style={styles.container}>
        <Content>
          <ImageBackground source={background} style={styles.shadow}>
            <View style={styles.bg}>
              <Text style={styles.Headtext}>Hello!</Text>
              <View style={styles.textGroup}>
                <Text style={styles.text}>Welcome to GoGo Care</Text>
                <Text style={styles.text}>
                  Out of home care service to live as you want
                </Text>
              </View>
              <View style={styles.btnGroup}>
                <Button
                  rounded
                  style={styles.btn}
                  onPress={() => navigation.navigate('Signup')}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    สมัครใช้บริการ
                  </Text>
                </Button>
                <Button
                  rounded
                  bordered
                  style={styles.btnOutline}
                  onPress={() => navigation.navigate('RegisGiver')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#18A0FB',
                    }}>
                    สมัครเป็นผู้ดูแลกับเรา
                  </Text>
                </Button>
              </View>
            </View>
          </ImageBackground>
        </Content>
      </View>
    </Container>
  );
};
export default Welcome;
