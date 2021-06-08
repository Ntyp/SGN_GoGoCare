/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, Dimensions} from 'react-native';
import {Container, View, Icon, Button} from 'native-base';

const Signup = ({navigation}) => {
  const deviceWidth = Dimensions.get('window').width;
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
    },
    btnLogIn: {
      backgroundColor: '#18A0FB',
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
      height: 51,
    },
    btnOutline: {
      backgroundColor: '#FFF',
      borderColor: '#18A0FB',
      
      marginTop: 10,
      alignSelf: 'center',
      width: deviceWidth - 32,
      justifyContent: 'center',
    },
  });

  return (
    <Container>
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 50,
            paddingTop: 30,
            marginBottom: 50,
          }}>
          <Icon
            name="location-outline"
            style={{color: '#18A0FB', fontSize: 50, alignSelf: 'center'}}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 20,

              fontFamily: 'Inter-regular',
            }}>
            Enable Location Service?
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontFamily: 'Inter-regular',
              color: 'grey',
              width: 307,
              height: 72,
            }}>
            For us to be able to help you the best that we can we recommend that
            you enable location tracking on your device.
          </Text>
          <Button rounded style={styles.btnLogIn}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
              Yes, Enable location
            </Text>
          </Button>
          <Button rounded bordered style={styles.btnOutline}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#18A0FB'}}>
              Skip
            </Text>
          </Button>
        </View>
      </View>
    </Container>
  );
};
export default Signup;
