import React from 'react';
import FooterBar_Client from '../components/Footer';
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
  Item,
  Input,
  Picker,
  Textarea,
} from 'native-base';
const RegisUserData2 = ({navigation}) => {
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
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 16,
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
          <Text style={{fontWeight: 'bold'}}>GO HEALTH</Text>
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
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: '#18A0FB',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          จองบริการพาไปพบแพทย์
        </Text>
        <Text style={{fontSize: 16, alignSelf: 'center', marginBottom: 20}}>
          Step 2
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: '#18A0FB',
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          คำถามที่ต้องการฝากไปถามถึงแพทยผู้รักษา
        </Text>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontSize: 12,
              alignSelf: 'flex-start',
              marginBottom: 20,
            }}>
            กรุณาพิมพ์คำถามที่คุณอยากทราบเพื่อฝากให้เราไปถามแทน
          </Text>
          <Textarea
            rowSpan={5}
            placeholder="คำถามที่ต้องการถามจากแพทย์ผู้รักษา"
            style={{
              borderWidth: 1,
              borderColor: '#E8E8E8',
              borderRadius: 8,
              marginBottom: 20,
            }}
          />
          <Text style={{fontSize: 12}}>
            * จำกัดข้อความ 200 ตัวอักษร หากมีข้อมูลเพิ่มเติม
          </Text>
          <Text style={{fontSize: 12}}>
            กรุณาติดต่อพูดคุยกับผู้ดูแลโดยตรงเพื่อความสะดวก
          </Text>
          <Grid>
            <Row style={{marginTop: 30}}>
              <Col>
                <View>
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
                    onPress={() => navigation.navigate('RegisUserData1')}>
                    <Text style={{color: '#18a0fb', fontWeight: 'bold'}}>
                      กลับ
                    </Text>
                  </Button>
                </View>
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
                  onPress={() => navigation.navigate('RegisUserData3')}>
                  <Text style={{fontWeight: 'bold'}}>ถัดไป</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </Content>
      {/* Footer */}
      <FooterBar_Client></FooterBar_Client>
    </Container>
  );
};
export default RegisUserData2;
