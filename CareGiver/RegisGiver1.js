import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  Container,
  Item,
  Title,
  Form,
  Input,
  Button,
  Center,
  Left,
  Right,
  Body,
  Header,
  Icon,
  Badge,
} from 'native-base';

const RegisGiver1 = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    topBar: {
      display: 'flex',
      backgroundColor: '#00a1ff',
      paddingBottom: 125,
    },
    titleText: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white',
      alignSelf: 'center',
    },
    textTop: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#00a1ff',
      margin: 25,
    },
    bgPage: {
      backgroundColor: '#E5E5E5',
    },
    textContent: {
      color: '#c1c1c1',
      fontWeight: 'bold',
      marginLeft: 10,
      marginTop: 20,
      marginBottom: 10,
    },
    Button: {
      backgroundColor: '#00a1ff',
      width: '100%',
      borderRadius: 50,
      marginTop: 20,
    },
    Button2: {
      backgroundColor: '#fff',
      borderColor: '#00a1ff',
      color: '#00a1ff',
      borderWidth: 1,
      width: '100%',
      borderRadius: 50,
    },
    textButton2: {
      color: '#00a1ff',
      fontWeight: 'bold',
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
      marginTop: 220,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    BadgeStyle: {
      backgroundColor: 'white',
      alignSelf: 'center',
      left: 50,
      top: -40,
      transform: [{scaleX: 0.8}, {scaleY: 0.8}],
      borderRadius: 20,
      width: 40,
      height: 40,
    },
  });
  return (
    <Container>
      <View style={styles.topBar}>
        <View>
          <Header noShadow style={{backgroundColor: '#18a0fb'}}>
            <Left style={{flex: 1}}>
              <Icon
                name="close"
                style={{color: '#fff'}}
                onPress={() => navigation.navigate('Welcome')}
              />
            </Left>
            <Body style={{flex: 1}}>
              <Title style={styles.titleText}>Profile</Title>
            </Body>
            <Right></Right>
          </Header>

          <View style={styles.imgView}>
            <Image
              style={styles.img}
              source={require('../assets/images/sammy-williams.jpg')}
            />
            <Badge
              style={{
                backgroundColor: 'white',
                alignSelf: 'center',
                left: 50,
                top: -40,
                scaleX: 0.8,
                scaleY: 1.1,
                borderRadius: 80,
                width: 40,
                height: 40,
              }}>
              <Icon
                name="camera"
                style={{color: '#C4C4C4'}}
                onPress={() => navigation.navigate('')}
              />
            </Badge>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.fixToText}>
          <Text style={styles.textTop}>Step 2</Text>
          <Text style={styles.textTop}>ตรวจสอบประวัติ</Text>
        </View>
        <Form style={{paddingLeft: 15, paddingRight: 15}}>
          <Text style={styles.textContent}>
            กรุณาถ่ายรูปหน้าตรงของคุณเพื่อยืนยันตัวตน
          </Text>

          <Button block style={styles.Button2}>
            <Text style={{color: '#00a1ff', fontWeight: 'bold'}}>
              ถ่ายรูปยืนยันตัวตน
            </Text>
          </Button>

          <Text style={styles.textContent}>
            กรุณาถ่ายรูปบัตรประจำตัวประชาชนของคุณ
          </Text>

          <Button block style={styles.Button2}>
            <Text style={{color: '#00a1ff', fontWeight: 'bold'}}>
              อัพโหลดบัตรประจำตัวประชาชน
            </Text>
          </Button>

          <Button
            block
            style={styles.Button}
            onPress={() => navigation.navigate('RegisGiver2')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>ถัดไป</Text>
          </Button>
        </Form>
      </View>
    </Container>
  );
};

export default RegisGiver1;
