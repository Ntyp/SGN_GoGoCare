import React from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';
import GoGoActiveHeader from '../../components/Img/GoGoActive-Header.jpg';
import FooterBar_Client from '../../components/Footer';
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
const GoActive = ({navigation}) => {
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
          <Text style={{fontWeight: 'bold', fontSize: 18}}>GO ACTIVE</Text>
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
      <Image
        source={require('../../components/Img/GoGoActive-Header.jpg')}
        style={{
          width: '100%',
          height: 154,
          marginBottom: 30,
        }}></Image>

      <Content>
        <Form style={{marginLeft: 20, marginRight: 20}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#18A0FB',
              fontSize: 18,
              alignSelf: 'center',
              marginBottom: 20,
            }}>
            Go Active - บริการพาไปทำกิจกรรม
          </Text>
          <Text style={{marginBottom: 20, fontSize: 12}}>
            {' '}
            บริการพาผู้สูงอายุออกไปเข้าสังคมทำกิจกรรมนอกบ้าน ที่จะช่วยสร้างเสริม
            สมรรถภาพทางร่างกาย ให้กระปรี้กระเป่า และแข็งแรงอยู่ตลอดเวลา โดยมี
            ผู้ดูแล(Caregiver) ที่ผ่านการคัดกรอง การอบรม และทดสอบการดูแลจาก
            ผู้เชี่ยวชาญคอยดูแลอย่างใกล้ชิด
          </Text>
          <Text style={{marginBottom: 20, fontWeight: 'bold', fontSize: 12}}>
            รายละเอียดการให้บริการ
          </Text>
          <Text style={{fontSize: 12}}>
            1. ผู้ดูแลจะเดินทางไปรับตามที่อยู่ที่แจ้ง
          </Text>
          <Text style={{fontSize: 12}}>
            {' '}
            2. พาไปทำกิจกรรม โดยให้ความช่วยเหลือ อำนวยความสะดวกต่าง ๆ คอยอยู่
            เป็นเพื่อน คอยดูแลในการดำเนินการทำกิจกรรม และระหว่างทำกิจกรรม
          </Text>
          <Text style={{fontSize: 12}}>
            {' '}
            3. ผู้ดูแลจะพาเดินทางกลับไปส่งที่ตามที่อยู่ที่แจ้ง หรือ
            นัดรับกันที่โรงพยาบาล
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              marginBottom: 20,
              marginTop: 20,
              fontSize: 12,
            }}>
            ค่าบริการ
          </Text>
          <Text style={{marginBottom: 10, fontSize: 12}}>
            อัตราค่าบริการ Go Active ราคา 800 บาท (ระยะเวลาให้บริการ 4 ชม.) ราคา
            1,200 บาท (ระยะเวลาให้บริการ 8 ชม.)
          </Text>
          <Text style={{color: '#FF3A44', fontWeight: 'bold', fontSize: 12}}>
            หมายเหตุ
          </Text>
          <Text style={{color: '#FF3A44', fontSize: 12}}>
            ค่าบริการไม่รวมค่าใช้จ่ายในการเดินทาง(แท็กซี่) ทั้งไปและกลับจุดหมาย
          </Text>
          <Grid>
            <Row style={{marginBottom: 30, marginTop: 20, alignSelf: 'center'}}>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: '#fff',
                    borderColor: '#18A0FB',
                    borderWidth: 1,
                    justifyContent: 'center',
                  }}
                  onPress={() => navigation.navigate('HomeClient')}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#18A0FB',
                    }}>
                    กลับ
                  </Text>
                </Button>
              </Col>
              <Col>
                <Button
                  style={{
                    width: 140,
                    height: 50,
                    borderRadius: 100,
                    backgroundColor: '#18A0FB',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#fff',
                    }}
                    onPress={() => navigation.navigate('RegisUserData1')}>
                    จองเลย!
                  </Text>
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
export default GoActive;
