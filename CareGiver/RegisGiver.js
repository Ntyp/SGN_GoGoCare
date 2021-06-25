import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  Container,
  Title,
  Form,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Body,
  Badge,
} from 'native-base';

const RegisGiver = ({navigation}) => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [address, setAddress] = useState('');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    topBar: {
      display: 'flex',
      backgroundColor: '#18a0fb',
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
      color: '#18a0fb',
      margin: 25,
    },
    bgPage: {
      backgroundColor: '#E5E5E5',
    },
    inputBox: {
      width: '95%',
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
    Button: {
      backgroundColor: '#18a0fb',
      width: '95%',
      marginLeft: 20,
      borderRadius: 50,
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
      borderRadius: 80,
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
                onPress={() => navigation.navigate('Welcome')}
              />
            </Badge>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.fixToText}>
          <Text style={styles.textTop}>Step 1</Text>
          <Text style={styles.textTop}>ข้อมูลส่วนตัว</Text>
        </View>
        <Form style={{paddingLeft: 5, paddingRight: 15}}>
          <TextInput
            style={styles.inputBox}
            placeholder="ชื่อ-นามสกุล"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onChangeText={text => setName(text)}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="เพศ"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onChangeText={text => setSex(text)}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="อายุ"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onChangeText={text => setAge(text)}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="เบอร์"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onChangeText={text => setPhonenum(text)}
          />

          <TextInput
            style={styles.inputBox}
            placeholder="ที่อยู่"
            placeholderTextColor="rgba(189, 189, 189, 1)"
            onChangeText={text => setAddress(text)}
          />

          <Button
            block
            style={styles.Button}
            onPress={() => navigation.navigate('RegisGiver1')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>ถัดไป</Text>
          </Button>
          <Button />
        </Form>
      </View>
    </Container>
  );
};

export default RegisGiver;
