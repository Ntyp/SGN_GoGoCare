/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Badge,
  Text,
  Row,
  View,
} from 'native-base';
import JobCard from '../components/JobCard';
const Home = ({navigation}) => {
  const deviceHeight = Dimensions.get('window').height;
  const deviceWidth = Dimensions.get('window').width;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = StyleSheet.create({
    inputAlignment: {
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 15,
      marginTop: 15,
    },
    container: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#fff',
    },
  });

  return (
    <Container>
      <View style={styles.container}>
        <Header noShadow style={{backgroundColor: 'white'}}>
          <Left style={{flex: 1}}>
            <Text style={{fontWeight: 'bold'}}>NEW JOB</Text>
          </Left>
          <Right style={{flex: 1}}>
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
        <View style={{flex: 1,flexDirection: 'row', marginLeft: 20}}>
          <JobCard />
          {/* <JobCard /> */}
        </View>
        {/* <JobCard /> */}
      </View>
    </Container>
  );
};
export default Home;